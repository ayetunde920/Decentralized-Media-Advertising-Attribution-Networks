;; Advertiser Verification Contract
;; Validates advertising companies and maintains their verification status

(define-data-var admin principal tx-sender)

;; Data structure for advertisers
(define-map advertisers
  { id: uint }
  {
    name: (string-ascii 100),
    website: (string-ascii 100),
    verified: bool,
    verification-date: uint,
    owner: principal
  }
)

(define-data-var next-advertiser-id uint u1)

;; Register a new advertiser
(define-public (register-advertiser (name (string-ascii 100)) (website (string-ascii 100)))
  (let
    (
      (advertiser-id (var-get next-advertiser-id))
    )
    (asserts! (is-eq tx-sender (var-get admin)) (err u403))
    (map-set advertisers
      { id: advertiser-id }
      {
        name: name,
        website: website,
        verified: false,
        verification-date: u0,
        owner: tx-sender
      }
    )
    (var-set next-advertiser-id (+ advertiser-id u1))
    (ok advertiser-id)
  )
)

;; Verify an advertiser
(define-public (verify-advertiser (advertiser-id uint))
  (let
    (
      (advertiser (unwrap! (map-get? advertisers { id: advertiser-id }) (err u404)))
    )
    (asserts! (is-eq tx-sender (var-get admin)) (err u403))
    (map-set advertisers
      { id: advertiser-id }
      (merge advertiser {
        verified: true,
        verification-date: block-height
      })
    )
    (ok true)
  )
)

;; Check if an advertiser is verified
(define-read-only (is-advertiser-verified (advertiser-id uint))
  (default-to false (get verified (map-get? advertisers { id: advertiser-id })))
)

;; Get advertiser details
(define-read-only (get-advertiser (advertiser-id uint))
  (map-get? advertisers { id: advertiser-id })
)

;; Transfer admin rights
(define-public (transfer-admin (new-admin principal))
  (begin
    (asserts! (is-eq tx-sender (var-get admin)) (err u403))
    (var-set admin new-admin)
    (ok true)
  )
)
