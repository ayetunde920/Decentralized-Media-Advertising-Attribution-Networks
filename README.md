# Decentralized Media Advertising Attribution Networks

A comprehensive blockchain-based solution for transparent and verifiable advertising attribution built on the Stacks blockchain using Clarity smart contracts.

## Overview

This project implements a decentralized advertising attribution network that provides transparency, accountability, and fair compensation in digital advertising. The system consists of five core smart contracts that work together to create a trustless advertising ecosystem.

## Architecture

### Core Contracts

1. **Advertiser Verification Contract** (`advertiser-verification.clar`)
    - Validates and manages advertising companies
    - Handles advertiser registration and verification status
    - Maintains advertiser reputation scores

2. **Campaign Tracking Contract** (`campaign-tracking.clar`)
    - Tracks advertising campaigns lifecycle
    - Manages campaign metadata and targeting parameters
    - Records campaign performance metrics

3. **Attribution Modeling Contract** (`attribution-modeling.clar`)
    - Implements various attribution models (first-touch, last-touch, multi-touch)
    - Calculates attribution weights for different touchpoints
    - Provides flexible attribution logic

4. **Performance Measurement Contract** (`performance-measurement.clar`)
    - Measures and records advertising performance metrics
    - Tracks conversions, impressions, and engagement
    - Generates performance reports

5. **Payment Processing Contract** (`payment-processing.clar`)
    - Handles automated payments based on performance
    - Manages escrow for advertising budgets
    - Processes payouts to publishers and affiliates

## Features

- **Transparent Attribution**: All attribution data is recorded on-chain for full transparency
- **Automated Payments**: Smart contract-based payment processing eliminates intermediaries
- **Fraud Prevention**: Blockchain verification prevents click fraud and fake impressions
- **Multi-Model Attribution**: Support for various attribution models
- **Real-time Tracking**: Live campaign performance monitoring
- **Decentralized Verification**: Community-driven advertiser verification system

## Getting Started

### Prerequisites

- [Clarinet](https://github.com/hirosystems/clarinet) - Clarity development environment
- [Stacks CLI](https://docs.stacks.co/docs/cli) - For interacting with Stacks blockchain
- Node.js 16+ (for testing and development tools)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/decentralized-media-attribution.git
cd decentralized-media-attribution
```

2. Initialize Clarinet project:
```bash
clarinet new attribution-network
cd attribution-network
```

3. Install dependencies:
```bash
npm install
```

### Development

1. Check contract syntax:
```bash
clarinet check
```

2. Run tests:
```bash
npm test
```

3. Start local development environment:
```bash
clarinet integrate
```

## Contract Interactions

### Advertiser Verification

```clarity
;; Register a new advertiser
(contract-call? .advertiser-verification register-advertiser 
  "Company Name" 
  "https://company.com" 
  "contact@company.com")

;; Verify an advertiser (admin only)
(contract-call? .advertiser-verification verify-advertiser tx-sender)
```

### Campaign Management

```clarity
;; Create a new campaign
(contract-call? .campaign-tracking create-campaign
  "Campaign Name"
  u1000000 ;; Budget in micro-STX
  u30 ;; Duration in days
  "target-audience-data")

;; Track campaign performance
(contract-call? .performance-measurement record-impression campaign-id publisher-id)
```

### Attribution & Payments

```clarity
;; Process attribution for a conversion
(contract-call? .attribution-modeling process-attribution
  conversion-id
  touchpoint-list
  attribution-model)

;; Process payment based on attribution
(contract-call? .payment-processing process-payment
  campaign-id
  attribution-data
  payment-amount)
```

## Testing

The project uses Vitest for comprehensive testing of all smart contract functions:

```bash
# Run all tests
npm test

# Run specific test file
npm test -- advertiser-verification.test.ts

# Run tests in watch mode
npm test -- --watch
```

## API Reference

### Advertiser Verification Contract

- `register-advertiser(name, website, contact)` - Register new advertiser
- `verify-advertiser(advertiser)` - Verify advertiser status
- `get-advertiser-info(advertiser)` - Get advertiser details
- `update-reputation(advertiser, score)` - Update reputation score

### Campaign Tracking Contract

- `create-campaign(name, budget, duration, targeting)` - Create new campaign
- `update-campaign(campaign-id, updates)` - Update campaign details
- `get-campaign-info(campaign-id)` - Get campaign information
- `pause-campaign(campaign-id)` - Pause active campaign

### Attribution Modeling Contract

- `set-attribution-model(model-type)` - Set attribution model
- `process-attribution(conversion-id, touchpoints)` - Process attribution
- `get-attribution-weights(conversion-id)` - Get attribution results

### Performance Measurement Contract

- `record-impression(campaign-id, publisher-id)` - Record ad impression
- `record-click(campaign-id, publisher-id)` - Record ad click
- `record-conversion(campaign-id, conversion-data)` - Record conversion
- `get-performance-metrics(campaign-id)` - Get performance data

### Payment Processing Contract

- `deposit-budget(campaign-id, amount)` - Deposit campaign budget
- `process-payment(campaign-id, recipients)` - Process payments
- `withdraw-funds(amount)` - Withdraw available funds
- `get-balance(principal)` - Check account balance

## Security Considerations

- All contracts implement proper access controls
- Budget deposits are held in escrow until campaign completion
- Attribution data is cryptographically verified
- Multi-signature requirements for high-value transactions
- Regular security audits recommended

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

- [ ] Integration with major ad networks
- [ ] Advanced fraud detection algorithms
- [ ] Mobile SDK for attribution tracking
- [ ] Analytics dashboard
- [ ] Cross-chain compatibility
- [ ] Privacy-preserving attribution methods

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue in this repository
- Join our [Discord community](https://discord.gg/attribution-network)
- Email: support@attribution-network.com

## Acknowledgments

- Stacks Foundation for blockchain infrastructure
- Clarity language development team
- Open source advertising attribution research community
```

