import { BigNumberish } from "ethers";
import { CdpWalletProvider } from "@coinbase/agentkit";
import { Abi } from "viem";

export interface Network {
  protocolFamily: "evm";
  chainId: string;
  networkId: string;
}

export interface RiskProfile {
  riskTolerance: 'low' | 'medium' | 'high' | 'ask';
  investmentHorizon: 'short' | 'medium' | 'long';
  investmentAmount: number;
  preferredStrategies: string[];
  needsRiskAssessment: boolean;
}

export interface PortfolioPosition {
  protocol: string;
  type: string;
  amount: number;
  asset: string;
  details: {
    healthFactor?: number;  // AAVE specific
    isInRange?: boolean;    // Uniswap specific
    unclaimedFees?: number; // Uniswap specific
  };
}

export interface UserPortfolio {
  riskProfile: RiskProfile;
  positions: PortfolioPosition[];
  totalValue: number;
}

export interface AavePosition {
  healthFactor: number;
  totalCollateral: number;
  totalDebt: number;
  availableBorrowsBase: number;
  liquidationThreshold: number;
}

export interface Strategy {
  id: string;
  name: string;
  description: string;
  riskLevel: 'low' | 'medium' | 'high';
  protocol: string;
  expectedApy: string;
  isAvailable: boolean;
  requirements?: {
    minimumAmount?: number;
    token?: string;
  };
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  strategies?: Strategy[];
  portfolio?: UserPortfolio;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error?: string;
}

// Update the ExtendedCdpWalletProvider interface
export type ExtendedCdpWalletProvider = CdpWalletProvider & {
  networkId: string;
  defaultAddress: {
    addressId: string;
  };
  getAddress(): string;
  getBalance(): Promise<bigint>;
  readContract(params: {
    address: `0x${string}`;
    abi: any[];
    functionName: string;
    args: any[];
  }): Promise<any>;
  invokeContract(params: {
    contractAddress: string;
    method: string;
    args: Record<string, unknown>;
    amount?: number;
    assetId?: string;
  }): Promise<{
    wait(): Promise<void>;
  }>;
  exportWallet(): Promise<string>;
}

// Protocol Types
export interface AaveReserveData {
  underlyingAsset: string;
  name: string;
  symbol: string;
  decimals: number;
  baseLTVasCollateral: number;
  reserveLiquidationThreshold: number;
  reserveLiquidationBonus: number;
  reserveFactor: number;
  usageAsCollateralEnabled: boolean;
  borrowingEnabled: boolean;
  isActive: boolean;
  isFrozen: boolean;
  liquidityIndex: number;
  variableBorrowIndex: number;
  liquidityRate: number;
  variableBorrowRate: number;
  aTokenAddress: string;
  variableDebtTokenAddress: string;
  availableLiquidity: number;
  totalScaledVariableDebt: number;
  isPaused: boolean;
  borrowCap: number;
  supplyCap: number;
}

export interface AaveUserReserveData {
  underlyingAsset: string;
  scaledATokenBalance: number;
  usageAsCollateralEnabledOnUser: boolean;
  scaledVariableDebt: number;
} 