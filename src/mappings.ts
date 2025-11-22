import { Humanized } from './types';

export const mappings: Record<string, Humanized> = {
  // User rejected
  'user rejected': {
    title: 'Transaction Rejected',
    message: 'You rejected the transaction in your wallet.',
    original: 'user rejected',
  },

  // Wallet closed popup
  'request rejected': {
    title: 'Request Rejected',
    message: 'You closed or rejected the wallet request.',
    original: 'request rejected',
  },

  // Gas issues
  'insufficient funds for gas': {
    title: 'Insufficient Funds',
    message: 'You don’t have enough ETH to pay for gas.',
    original: 'insufficient funds for gas',
  },

  'intrinsic gas too low': {
    title: 'Gas Too Low',
    message: 'The gas limit is too low for this transaction.',
    original: 'intrinsic gas too low',
  },

  // ERC20
  'execution reverted: erc20: transfer amount exceeds allowance': {
    title: 'Insufficient Allowance',
    message: 'Your allowance is too low for this operation.',
    original: 'execution reverted: ERC20: transfer amount exceeds allowance',
  },

  'execution reverted: erc20: transfer amount exceeds balance': {
    title: 'Insufficient Token Balance',
    message: 'Your token balance is too low for this transaction.',
    original: 'execution reverted: ERC20: transfer amount exceeds balance',
  },

  // Generic
  'execution reverted': {
    title: 'Transaction Reverted',
    message: 'The transaction failed. Check contract conditions.',
    original: 'execution reverted',
  },

  'internal json-rpc error': {
    title: 'RPC Error',
    message: 'The node returned an unexpected error.',
    original: 'Internal JSON-RPC error',
  },
};
