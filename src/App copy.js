/* eslint-disable no-undef */
import './App.css';
import './counter.css';
import React, { useEffect, useMemo, useState } from 'react';
import os from './assets/os.png';
import twitter from './assets/x.png';
import logo from './assets/logo.png';
import gif from './assets/gif.gif';
import eth from './assets/ethereum.png';
import usd from './assets/tether.png';
import { Web3Button, Web3Modal, useWeb3Modal } from '@web3modal/react';
import { mainnet, useAccount, useContractRead, useContractReads, useContractWrite, useNetwork, usePublicClient, useSwitchNetwork, useWaitForTransaction } from 'wagmi';
import { createPublicClient, formatEther, http, parseEther, webSocket } from 'viem';
import Countdown from 'react-countdown';
import { sepolia } from 'wagmi/chains'


const renderer = ({ days, hours, minutes, seconds, completed }) => {
	/*	if (completed) {
			// Render a completed state
			return <Completionist />;
		} else {*/
	// Render a countdowns

	if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {

		window.location.reload(true);
		console.log("Mint Begins");
	}


	return <div class="counterBlock"><div class="days">{days}</div><div class="dots">:</div><div class="days">{hours}</div><div class="dots">:</div><div class="days">{minutes}</div><div class="dots">:</div><div class="sec">{seconds}</div></div>;
	/*	}*/
};

const ops = () => {
	window.open("https://testnets.opensea.io/collection/color-art");
}

const tweet = () => {
	window.open("#");
}

const website = () => {
	window.open("https://peyotepepe.pages.dev/");
}


const homeLink = () => {
	window.open("#");
}


let ABI = [
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "receiver",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "quantity",
				"type": "uint256[]"
			}
		],
		"name": "airdrop",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "ownerMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_initBaseURI",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_initNotRevealedUri",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_tokenContract",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "ApprovalCallerNotOwnerNorApproved",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ApprovalQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ApprovalToCurrentOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ApproveToCaller",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "BalanceQueryForZeroAddress",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ref",
				"type": "address"
			}
		],
		"name": "mintInSameChainWithNative",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ref",
				"type": "address"
			}
		],
		"name": "mintInSameChainWithUSDT",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MintToZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintZeroQuantity",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "OperatorNotAllowed",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OwnerIndexOutOfBounds",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OwnerQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TokenIndexOutOfBounds",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferCallerNotOwnerNorApproved",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferFromIncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToNonERC721ReceiverImplementer",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "URIQueryForNonexistentToken",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_decimalCorrector",
				"type": "uint256"
			}
		],
		"name": "set_decimalCorrector",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_decimalNumber",
				"type": "uint256"
			}
		],
		"name": "set_decimalNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_dAddress",
				"type": "address"
			}
		],
		"name": "set_destinationAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_divider",
				"type": "uint256"
			}
		],
		"name": "set_divider",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_divider2",
				"type": "uint256"
			}
		],
		"name": "set_divider2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_mintPriceInUSDTInBips",
				"type": "uint256"
			}
		],
		"name": "set_mintPriceInUSDTInBips",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_refRewardsPortion_Tier1",
				"type": "uint256"
			}
		],
		"name": "set_refRewardsPortion_Tier1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_refRewardsPortion_Tier2",
				"type": "uint256"
			}
		],
		"name": "set_refRewardsPortion_Tier2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_contractURI",
				"type": "string"
			}
		],
		"name": "setContractURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_df",
				"type": "address"
			}
		],
		"name": "setDataFeed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_max_per_wallet",
				"type": "uint256"
			}
		],
		"name": "setMax_per_wallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_MAX_SUPPLY",
				"type": "uint256"
			}
		],
		"name": "setMAX_SUPPLY",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_notRevealedURI",
				"type": "string"
			}
		],
		"name": "setNotRevealedURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint96",
				"name": "_royaltyFeesInBips",
				"type": "uint96"
			}
		],
		"name": "setRoyaltyInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenContract",
				"type": "address"
			}
		],
		"name": "setTokenContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggle_public_mint_status",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggleReveal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimalCorrector",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimalNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "destinationAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "divider",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "divider2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBaseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getChainlinkDataFeedLatestAnswer",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTheMintPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "max_per_wallet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_SUPPLY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintPriceInUSDTInBips",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "notRevealedUri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "OPERATOR_FILTER_REGISTRY",
		"outputs": [
			{
				"internalType": "contract IOperatorFilterRegistry",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "public_mint_status",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "publicMinted",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "refRewardsPortion_Tier1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "refRewardsPortion_Tier2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "revealed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_salePrice",
				"type": "uint256"
			}
		],
		"name": "royaltyInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "savedAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "savedQuantity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Tier1_referral_payments",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Tier1_referrals",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Tier1_referrer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Tier2_referral_payments",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Tier2_referrals",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Tier2_referrer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token_Contract",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let address = "0xb7E140e38338f621437CFcDD8ebCCb5E997e2660";
//let address = "0xE7268C3BC66b4dA84925D16110aE81391F26061d";


let ABI2 = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let address2 = "0xF81353Dd47E09f4b4Ac41986A9C6050f424962eF";

const maxSupply = 555;

const Home = () => {


	const { open } = useWeb3Modal()
	const { chain } = useNetwork()
	const { switchNetwork } = useSwitchNetwork()

	const { address: walletAddress } = useAccount({
		async onConnect() {
			handleConnect()
		}
	})

	const transport = webSocket('wss://sepolia.infura.io/ws/v3/32edc413e8e247f3acc67e539f70d74a')

	const publicClient = createPublicClient({
		chain: sepolia,
		transport,
	})

	const [_totalSupply, settotalSupply] = useState(0)
	const [statusError, setstatusError] = useState("")
	const [statusLoading, setstatusLoading] = useState("")
	const [success, setsuccess] = useState("")

	const [approve_statusError, setapprove_statusError] = useState("")
	const [approve_statusLoading, setapprove_statusLoading] = useState("")
	const [approve_success, setapprove_success] = useState("")

	const [nftMintingAmount, setnftMintingAmount] = useState(1)
	const [_publicMintMsg, set_publicMintMsg] = useState("Mint Here")
	const [_cost, set_publicSaleCost] = useState("")
	const [_priceInUSDT, set_priceInUSDT] = useState(0)
	const [_wlcost, set_wlcost] = useState(0)
	const [_max_per_wallet, set_max_per_wallet] = useState(1)
	const [_owner, set_owner] = useState("")
	const [myNFTWallet, setmyNFTWallet] = useState(0)
	const [_public_mint_status, set_public_mint_status] = useState("")
	const [_MAX_SUPPLY, set_MAX_SUPPLY] = useState("")
	const [_navbarOpen, set_navbarOpen] = useState(0)
	const [_connected, setConnected] = useState(false)
	const [_freeMinLimit, set_OverallFreeMintLimit] = useState(600);
	const [showButton, setShowButton] = useState(false);
	const [_ref_Address, set_ref_Address] = useState('');
	const [_currentAllowance, setCurrentAllowance] = useState(0);
	const [_increaseAllowanceAmount, setIncreaseAllowanceAmount] = useState(0);
	const [_allowanceStatus, setAllowanceStatus] = useState(false);

	async function closeNav() {
		set_navbarOpen(0);
		//this.setState({ _navbarOpen: 0 });
	}

	async function navbarOpen() {
		set_navbarOpen(1);
		//this.setState({ _navbarOpen: 0 });
	}
	//........................................//
	const contract = {
		address: address,
		abi: ABI
	}

	var contract2 = {
		address: address2,
		abi: ABI2
	}

	async function handleConnect() {
		if (chain.id !== 11155111) {
			switchNetwork(11155111)
		}

		var data = await getBalance();
		setmyNFTWallet(Number(data.data));
		console.log("myNFTWallet :" + data.data);
		setConnected(true);
	}

	const { refetch: getTotalSupply } = useContractRead({
		...contract,
		functionName: 'totalSupply',
	})

	const { refetch: getCost } = useContractRead({
		...contract,
		functionName: 'getTheMintPrice',
	})

	const { refetch: getPriceInUSDT } = useContractRead({
		...contract,
		functionName: 'mintPriceInUSDTInBips',
	})

	const { refetch: getBalance } = useContractRead({
		...contract,
		functionName: 'balanceOf',
		args: [walletAddress ? walletAddress : '0x']
	})

	useEffect(() => {

		async function extractLink() {
			try {
				if (window.location.href != null) {

					let currentUrl = window.location.href;
					console.log("currentUrl" + currentUrl);

					// https://dtc-mint.pinkribbons.club/?ref=0x6334BAE02114C080F05E6D58b65A1d7926FbbeBc

					let arr = currentUrl.split("0x");
					console.log("arr:" + "0x" + arr[1]);

					set_ref_Address("0x" + arr[1]);

				}
			} catch (err) {
				console.log(err);
			}
		}

		async function fetchData() {
			var data = await getTotalSupply();

			settotalSupply(Number(data.data))
			console.log("totalSupplyFromUseffect : " + data.data)

		}
		async function fetchData2() {

			var data1 = await getBalance();
			setmyNFTWallet(Number(data1.data));
			console.log("myNFTWallet :" + data1.data);
		}

		async function fetchData3() {

			var data2 = await getCost();
			set_publicSaleCost(Number(data2.data));
			console.log("publicSaleCost2 :" + data2.data);
		}

		async function fetchData4() {

			var data2 = await getPriceInUSDT();
			set_priceInUSDT(Number(data2.data));
			await new Promise(resolve => setTimeout(resolve, 2000));

			const data = await getAllowance();
			setCurrentAllowance(Number(data.data));

			console.log("current allowance : " + (Number(data.data)));
			console.log("USDT Value : " + (nftMintingAmount * Number(data2.data) * 10 ** 16));

			if (Number(data.data) >= (nftMintingAmount * Number(data2.data) * 10 ** 16)) {
				setAllowanceStatus(true);
				//Show the repay button

			} else {
				setAllowanceStatus(false);
				//Show the approve button
				console.log("allowanceCheck4");
			}
		}

		async function allowance() {

			try {
				setapprove_statusLoading(true);
				setapprove_statusError(false)

				console.log("Number(_currentAllowance)" + Number(_currentAllowance));
				console.log("Cost" + Number(nftMintingAmount * _priceInUSDT * 10 ** 16));

				setIncreaseAllowanceAmount(Number(Number(nftMintingAmount * _priceInUSDT * 10 ** 16) - Number(_currentAllowance)))
				var increaseAllowanceAmount = (Number(Number(nftMintingAmount * _priceInUSDT * 10 ** 16) - Number(_currentAllowance)));
				console.log("increaseAllowanceAmount : " + _increaseAllowanceAmount);

				var res = await writeAsync({
					...contract2,
					functionName: 'increaseAllowance',
					args: [address, increaseAllowanceAmount],

					//value: '100000000000000000',
					gasLimit: '685000'
				})
				var result = await publicClient.waitForTransactionReceipt(res)
				if (result.status === 'success') {
					setapprove_statusError(false)
					setapprove_success(true)
					setstatusapprove_Loading(false)
					await new Promise(resolve => setTimeout(resolve, 15000));
					window.location.reload();

					await new Promise(resolve => setTimeout(resolve, 2000));
					window.location.reload();
				}
				else {
					setapprove_success(false)
					setapprove_statusError(true)
					setapprove_statusLoading(false)
				}
			} catch (err) {
				setapprove_success(false)
				setapprove_statusError(true)
				setapprove_statusLoading(false)
				console.log(err);
			}

		}

		extractLink();

		if (_connected) {
			fetchData();
			fetchData2();
			fetchData3();
			fetchData4();
			//allowanceCheck();
		}

		// eslint-disable-next-line no-use-before-define
	}, [_connected, getBalance, getCost, getPriceInUSDT, getTotalSupply, _priceInUSDT, nftMintingAmount]);

	const { data, refetch, isSuccess } = useContractReads({
		contracts: [
			{ ...contract, functionName: 'totalSupply' },
			{ ...contract, functionName: 'max_per_wallet' },
			{ ...contract, functionName: 'owner' },
			{ ...contract, functionName: 'getTheMintPrice' },
			{ ...contract, functionName: 'MAX_SUPPLY' },
			{ ...contract, functionName: 'public_mint_status' },

		]
	},)

	useMemo(() => {

		if (isSuccess === true) {
			settotalSupply(Number(data[0].result))
			set_max_per_wallet(Number(data[1].result))
			//set_wlcost(formatEther(data[2].result))
			set_owner(data[2].result)
			//set_publicSaleCost(formatEther(data[4].result))
			set_publicSaleCost(Number(data[3].result)); // Convert WEI to ETH
			set_MAX_SUPPLY(data[4].result)
			set_public_mint_status(data[5].result)
		}
	}, [_totalSupply, data, isSuccess])

	//........................................//

	async function onPlus() {

		console.log("_public_mint_status :" + _public_mint_status);
		var nftIhave = nftMintingAmount + myNFTWallet;


		console.log("myNFTWallet : " + myNFTWallet);
		console.log("nftMintingAmount : " + nftMintingAmount);

		if (_public_mint_status === true) {
			console.log("2");

			if (nftIhave < _max_per_wallet) {
				//if (nftIhave < 1) {
				console.log("3");

				setnftMintingAmount(nftMintingAmount + 1);
				console.log("4");


				//}
			}
		}
	}

	async function onMinus() {
		if (nftMintingAmount != 1) {
			setnftMintingAmount(nftMintingAmount - 1)
		}
	}

	const { writeAsync } = useContractWrite({
		...contract,
		onError(error) {
			if (error.message.includes('balance')) {
				setstatusError(true)
				setstatusLoading(false)
			}
		}
	})

	async function onMint() {
		try {
			var mintCost;
			var fullTotalSupply = 0;
			fullTotalSupply = (nftMintingAmount) + (_totalSupply);
			console.log("fullTotalSupply : " + fullTotalSupply);

			if (_public_mint_status) {
				//mintCost =  parseFloat(_cost)
				mintCost = _cost;
				console.log("mintCostB : " + mintCost);
			}

			mintCost = (mintCost * nftMintingAmount).toString();
			console.log("nftMintingAmountA : " + nftMintingAmount)

			console.log("mintCostA : " + mintCost);

			setstatusLoading(true)
			setstatusError(false)

			var fullCost = ((Number(_cost) * 110 / 100) * nftMintingAmount).toFixed(0);
			console.log("ref_Address :" + _ref_Address);

			var referral = _ref_Address;
			if (_ref_Address === '0xundefined') {
				referral = walletAddress;
			}

			console.log("referral_input :" + referral);

			var res = await writeAsync({
				functionName: 'mintInSameChainWithNative',
				args: [nftMintingAmount, referral],
				value: fullCost // mintCost
			})
			var result = await publicClient.waitForTransactionReceipt(res)
			if (result.status === 'success') {
				setstatusError(false)
				setsuccess(true)
				setstatusLoading(false)
				await new Promise(resolve => setTimeout(resolve, 5000));
				window.location.reload(true);
			}
			else {
				setsuccess(false)
				setstatusError(true)
				setstatusLoading(false)

			}
		}
		catch (e) {
			console.log(e)
			setstatusError(true)
			setstatusLoading(false)

		}
	}

	async function onMintUSDT() {
		try {
			var mintCost;
			var fullTotalSupply = 0;
			fullTotalSupply = (nftMintingAmount) + (_totalSupply);
			console.log("fullTotalSupply : " + fullTotalSupply);

			setstatusLoading(true);
			setstatusError(false);

			var referral = _ref_Address;
			if (_ref_Address === '0xundefined') {
				referral = walletAddress;
			}

			console.log("referral_input :" + referral);

			var res = await writeAsync({
				functionName: 'mintInSameChainWithUSDT',
				args: [nftMintingAmount, referral],
				value: 0
			})
			var result = await publicClient.waitForTransactionReceipt(res)
			if (result.status === 'success') {
				setstatusError(false)
				setsuccess(true)
				setstatusLoading(false)
				await new Promise(resolve => setTimeout(resolve, 5000));
				window.location.reload(true);
			}
			else {
				setsuccess(false)
				setstatusError(true)
				setstatusLoading(false)

			}
		}
		catch (e) {
			console.log(e)
			setstatusError(true)
			setstatusLoading(false)

		}
	}

	function shortenAddress(walletAddress) {
		try {
			return _connected
				? walletAddress.slice(0, 3) + "..." + walletAddress.slice(-4)
				: "Connect";
		} catch (error) {
			console.log(error);
		}
	}

	const { refetch: getAllowance } = useContractRead({
		...contract2,
		functionName: 'allowance', args: [walletAddress, address]
	})

	async function allowanceCheck() {

		console.log("allowanceCheck1");
		const data = await getAllowance();
		setCurrentAllowance(Number(data.data));
		console.log("allowanceCheck2");

		if (Number(data.data) >= Number(nftMintingAmount * _priceInUSDT * 10 ** 16)) {
			setAllowanceStatus(true);
			//Show the repay button
			console.log("setAllowanceStatus : " + setAllowanceStatus);
			console.log("allowanceCheck3");
			console.log("Allowance Check---: " + Number(data.data));
			console.log("Price in USDT ss : " + _priceInUSDT);
			console.log("USDT Value : " + Number(nftMintingAmount * _priceInUSDT * 10 ** 16));

		} else {
			setAllowanceStatus(false);
			//Show the approve button
			console.log("allowanceCheck4");

		}
	}

	async function allowance() {

		try {
			setapprove_statusLoading(true);
			setapprove_statusError(false);
			console.log("Number(_currentAllowance)" + Number(_currentAllowance));
			console.log("Cost" + Number(nftMintingAmount * _priceInUSDT * 10 ** 16));

			setIncreaseAllowanceAmount(Number(Number(nftMintingAmount * _priceInUSDT * 10 ** 16) - Number(_currentAllowance)))
			var increaseAllowanceAmount = (Number(Number(nftMintingAmount * _priceInUSDT * 10 ** 16) - Number(_currentAllowance)));
			console.log("increaseAllowanceAmount : " + _increaseAllowanceAmount);

			var res = await writeAsync({
				...contract2,
				functionName: 'increaseAllowance',
				args: [address, increaseAllowanceAmount],

				//value: '100000000000000000',
				gasLimit: '685000'
			})
			var result = await publicClient.waitForTransactionReceipt(res)
			if (result.status === 'success') {
				setapprove_statusError(false)
				setapprove_success(true)
				setapprove_statusLoading(false)

				await new Promise(resolve => setTimeout(resolve, 3000));
				window.location.reload();
			}
			else {
				setapprove_success(false)
				setapprove_statusError(true)
				setapprove_statusLoading(false)
			}
		} catch (err) {
			setapprove_success(false)
			setapprove_statusError(true)
			setapprove_statusLoading(false)
			console.log(err);
		}

	}


	return (
		<div class="allWrap">
			<div class="light">
				<div class="cont">
					<div class="headers">

						<div class="headers2">

							<div class="logo"><img class="logoPic" src={logo} onClick={website} /></div>

							<div class="right">

								<div class="icons">
									<div class="socialIcon"><img onClick={ops} src={os} /></div>
									<div class="socialIcon"><img onClick={tweet} src={twitter} /></div>
								</div>

								<div class="connect2">
									<Web3Button />
								</div>

							</div>

						</div>

					</div>

					<div class="introduction">

						<div class="in2">
							<div class="intro">
								The rare Pepe and Friends <br /> Collection
							</div>

							<div class="intro2">
								<p></p>
								<p>The second NFT collection to include Pepe's friends in the fun, nostalgia, and mind manifesting. With 8888 NFTs available and rare NFTs earning special prizes, this collection is the first of it's kind, and very lucrative for holders. A combination of Rare Pepe and Peyote Pepe is the rarest NFT in the collection.</p>
							</div>
							<div id="copy-notification" class="notification">Copied and ready!!</div>

							{walletAddress !== undefined ?
								<div class="container">
									<div class="container2" onClick={() => {
										// Copy address to clipboard and handle notification
										navigator.clipboard.writeText(`https://colorart.pages.dev/${walletAddress}`)
											.then(() => {
												const notification = document.getElementById('copy-notification');
												notification.classList.add('show');
												setTimeout(() => notification.classList.remove('show'), 3000); // Hide after 5 seconds
											})
											.catch(error => console.error('Failed to copy address:', error));
									}}>
										<div class="address-section">
											<p>Get your referral address:</p>
											<code>https://colorart.pages.dev/{shortenAddress(walletAddress)}</code>
										</div>
										<button class="copy-button">Copy</button>
									</div>
								</div> : null}

							<div class="nftblockWalletConnectedALL">
								{walletAddress === undefined ?
									<div class="walletConnect">

										<button onClick={() => { open() }} class="wallet3" >MINT NOW</button>

									</div>
									:
									null}


							</div>
						</div>

						{walletAddress === undefined ?

							(<div class="nftPicDiv">
								<img class="nftPic" src={gif} alt='gif' />
							</div>) : (

								(<div class="mintDiv">
									<div class="totalSupply">{_totalSupply} / 8888</div>

									{(!_public_mint_status) ? (
										<div className='price'>🔴 Minting is Paused! 🔴</div>
									) : (
										<div className='price'>🟢 Minting is Live! 🟢</div>
									)}


									<div class="minting_count_button">

										<div class="center">

											<button onClick={onMinus} class="btnfos-0-2" type="submit">-</button>

										</div>

										<div>
											<div class="nftminter2">{nftMintingAmount}</div>
										</div>


										<div class="center">
											<button onClick={onPlus} class="btnfos-0-2" type="submit">+</button>

										</div>
									</div>

									{_max_per_wallet <= myNFTWallet ?

										(<div class="price">
											{walletAddress != _owner ?
												<div>Limit Reached! ⚠️</div> : <div>You can mint {4269 - Number(myNFTWallet)} more</div>}
										</div>) :
										(<div class="price"><div>You can mint {Number(_max_per_wallet) - Number(myNFTWallet)} more</div></div>)}


									{(_max_per_wallet > myNFTWallet && _public_mint_status) ?

										<div class="mintbuttondiv">
											<button class="btnfos-0-3" onClick={onMint}>
												Mint For {(_cost / 10 ** 18).toFixed(6) * nftMintingAmount} ETH <img src={eth} />
											</button>

											{_allowanceStatus ?
												<button class="btnfos-0-3" onClick={onMintUSDT}>
													Mint For {nftMintingAmount * (_priceInUSDT * 10 ** 16) / 10 ** 18} USDT <img src={usd} />
												</button> :

												<button class="btnfos-0-3" onClick={allowance}>
													Approve USDT <img src={usd} />
												</button>}

										</div> :

										<div class="mintbuttondiv">
											<button class="btnfos-0-3" disabled onClick={onMint}>
												<span class="initialText">Mint For {(_cost / 10 ** 18).toFixed(6)} ETH <img src={eth} /></span>
												<span class="hoverText">Mint For {(_cost / 10 ** 18).toFixed(6)} ETH <img src={eth} /></span>
											</button>

											<button class="btnfos-0-3" disabled>
												<span class="initialText">Mint For 0.01 USDT <img src={usd} /></span>
												<span class="hoverText">In Development <img src={usd} /></span>
											</button>

										</div>
									}
									<div>
										<p></p>
										{statusError ? (
											<div class="errorMessage">
												<div >Sorry, something went wrong <br /> please try again later</div>
											</div>)
											: null}

										{statusLoading ? (
											<div class="loadingContainer">
												<div class="loadingText">Minting your NFT</div>
											</div>)
											: null}

										{success ? (
											<div class="successfully">🐸 Minting Successful! 🐸</div>
										)
											: null}

									</div>

									<div>
										<p></p>
										{approve_statusError ? (
											<div class="errorMessage">
												<div >Sorry, something went wrong <br /> please try again later</div>
											</div>)
											: null}

										{approve_statusLoading ? (
											<div class="loadingContainer">
												<div class="loadingText">Approving</div>
											</div>)
											: null}

										{approve_success ? (
											<div class="successfully">Appproved ✅</div>
										)
											: null}

									</div>

								</div>

								)
							)}

					</div>

				</div>

			</div >
		</div >
	)

}
export default Home;
