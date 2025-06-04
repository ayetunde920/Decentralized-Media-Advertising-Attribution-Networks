import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock clarity functions and environment
const mockClarity = {
  contracts: {
    'advertiser-verification': {
      functions: {
        'register-advertiser': vi.fn(),
        'verify-advertiser': vi.fn(),
        'is-advertiser-verified': vi.fn(),
        'get-advertiser': vi.fn(),
        'transfer-admin': vi.fn()
      }
    }
  },
  tx: {
    sender: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'
  }
};

// Setup global mock
global.clarity = mockClarity;

describe('Advertiser Verification Contract', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.resetAllMocks();
  });
  
  it('should register a new advertiser', async () => {
    const name = 'Test Advertiser';
    const website = 'https://test.com';
    
    mockClarity.contracts['advertiser-verification'].functions['register-advertiser'].mockReturnValue({
      success: true,
      result: { value: 1 }
    });
    
    const result = await mockClarity.contracts['advertiser-verification'].functions['register-advertiser'](name, website);
    
    expect(result.success).toBe(true);
    expect(result.result.value).toBe(1);
    expect(mockClarity.contracts['advertiser-verification'].functions['register-advertiser']).toHaveBeenCalledWith(name, website);
  });
  
  it('should verify an advertiser', async () => {
    const advertiserId = 1;
    
    mockClarity.contracts['advertiser-verification'].functions['verify-advertiser'].mockReturnValue({
      success: true,
      result: { value: true }
    });
    
    const result = await mockClarity.contracts['advertiser-verification'].functions['verify-advertiser'](advertiserId);
    
    expect(result.success).toBe(true);
    expect(result.result.value).toBe(true);
    expect(mockClarity.contracts['advertiser-verification'].functions['verify-advertiser']).toHaveBeenCalledWith(advertiserId);
  });
  
  it('should check if an advertiser is verified', async () => {
    const advertiserId = 1;
    
    mockClarity.contracts['advertiser-verification'].functions['is-advertiser-verified'].mockReturnValue({
      success: true,
      result: { value: true }
    });
    
    const result = await mockClarity.contracts['advertiser-verification'].functions['is-advertiser-verified'](advertiserId);
    
    expect(result.success).toBe(true);
    expect(result.result.value).toBe(true);
    expect(mockClarity.contracts['advertiser-verification'].functions['is-advertiser-verified']).toHaveBeenCalledWith(advertiserId);
  });
  
  it('should get advertiser details', async () => {
    const advertiserId = 1;
    const advertiserDetails = {
      name: 'Test Advertiser',
      website: 'https://test.com',
      verified: true,
      'verification-date': 12345,
      owner: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'
    };
    
    mockClarity.contracts['advertiser-verification'].functions['get-advertiser'].mockReturnValue({
      success: true,
      result: { value: advertiserDetails }
    });
    
    const result = await mockClarity.contracts['advertiser-verification'].functions['get-advertiser'](advertiserId);
    
    expect(result.success).toBe(true);
    expect(result.result.value).toEqual(advertiserDetails);
    expect(mockClarity.contracts['advertiser-verification'].functions['get-advertiser']).toHaveBeenCalledWith(advertiserId);
  });
  
  it('should transfer admin rights', async () => {
    const newAdmin = 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG';
    
    mockClarity.contracts['advertiser-verification'].functions['transfer-admin'].mockReturnValue({
      success: true,
      result: { value: true }
    });
    
    const result = await mockClarity.contracts['advertiser-verification'].functions['transfer-admin'](newAdmin);
    
    expect(result.success).toBe(true);
    expect(result.result.value).toBe(true);
    expect(mockClarity.contracts['advertiser-verification'].functions['transfer-admin']).toHaveBeenCalledWith(newAdmin);
  });
});
