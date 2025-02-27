/* eslint-disable no-undef */
import './App.css';
import './counter.css';
import React, { useEffect, useMemo, useState } from 'react';
import os from './assets/os.png';
import twitter from './assets/x.png';
import logo from './assets/logo.png';
import nft1 from './assets/gif.gif';
import eth from './assets/ethereum.png';
import robo from './assets/robo.png';
import { Web3Button, Web3Modal, useWeb3Modal } from '@web3modal/react';
import { mainnet, useDisconnect, useAccount, useContractRead, useContractReads, useContractWrite, useNetwork, usePublicClient, useSwitchNetwork, useWaitForTransaction, useSignMessage } from 'wagmi';
import { createPublicClient, formatEther, http, parseEther, webSocket } from 'viem';
import { pulsechainV4, polygon } from 'wagmi/chains';
import inventory from './assets/inventory.png';
import Profilesidebar from './Pages/sidebar';
import user from './assets/user.png';
import imagePic from './assets/image .png';
import game from './assets/console.png';
import check from './assets/check-mark.png';
import errorImg from './assets/error.png';
import refresh from './assets/refresh.png';
import Web3_mm from 'web3';
import Web3_1155 from 'web3';
import axios from 'axios';

const ops = () => {
	window.open("#");
}

//ENV WALLET : 0x1E510513540654Af3c383744c93B58e1417E957F

let ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mintQuantity",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_funderWallet",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_maxSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nftCost",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "gameNFTPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "networkChainId",
				"type": "uint256"
			},
			{
				"internalType": "uint96",
				"name": "feeNumerator",
				"type": "uint96"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "AddressInsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "userAddress",
				"type": "address[]"
			}
		],
		"name": "airdropNFT",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "numerator",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "denominator",
				"type": "uint256"
			}
		],
		"name": "ERC2981InvalidDefaultRoyalty",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC2981InvalidDefaultRoyaltyReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numerator",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "denominator",
				"type": "uint256"
			}
		],
		"name": "ERC2981InvalidTokenRoyalty",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC2981InvalidTokenRoyaltyReceiver",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC721EnumerableForbiddenBatchMint",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
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
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
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
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
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
		"name": "ERC721OutOfBoundsIndex",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidShortString",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "str",
				"type": "string"
			}
		],
		"name": "StringTooLong",
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
		"inputs": [],
		"name": "EIP712DomainChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "Mint",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mintQuantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "mintMode",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "mintTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "signature",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "validateSignature",
				"type": "bytes"
			}
		],
		"name": "mintForGame",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mintQuantity",
				"type": "uint256"
			}
		],
		"name": "ownerMint",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_marketplaceAddress",
				"type": "address"
			}
		],
		"name": "removeBlacklistMarketplace",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "reveal",
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
				"name": "_newBaseExtension",
				"type": "string"
			}
		],
		"name": "setBaseExtension",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_marketplaceAddress",
				"type": "address"
			}
		],
		"name": "setBlacklistMarketplace",
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
				"internalType": "uint256",
				"name": "_newCost",
				"type": "uint256"
			}
		],
		"name": "setCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint96",
				"name": "feeNumerator",
				"type": "uint96"
			}
		],
		"name": "setDefaultRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_easyModePercent",
				"type": "uint256"
			}
		],
		"name": "setEasyModePercent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newGameNFTCost",
				"type": "uint256"
			}
		],
		"name": "setGameNFTCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_hardModePercent",
				"type": "uint256"
			}
		],
		"name": "setHardModePercent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_maxSupply",
				"type": "uint256"
			}
		],
		"name": "setMaxSupply",
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
		"inputs": [],
		"name": "toggleGameMintSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "ToggleGameMintSale",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "toggleMintSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "ToggleMintSale",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "toggleNonReveal",
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
		"name": "baseExtension",
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
		"name": "baseURI",
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
		"name": "contractUri",
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
		"name": "cost",
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
		"name": "DOMAIN_SEPARATOR",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "easyModeGamePercent",
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
		"name": "eip712Domain",
		"outputs": [
			{
				"internalType": "bytes1",
				"name": "fields",
				"type": "bytes1"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "version",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "chainId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "verifyingContract",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "salt",
				"type": "bytes32"
			},
			{
				"internalType": "uint256[]",
				"name": "extensions",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mintQuantity",
				"type": "uint256"
			}
		],
		"name": "estimateForFixPrice",
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
				"name": "mintQuantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_mintModeType",
				"type": "uint256"
			}
		],
		"name": "estimateForGame",
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
		"name": "funderWallet",
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
		"name": "gameMintTime",
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
		"name": "gameNFTCost",
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
		"name": "hardModeGamePercent",
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
		"name": "isGameMintActive",
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
		"name": "isMartekplaceBlacklist",
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
		"name": "isMintActive",
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
		"name": "maxSupply",
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
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "salePrice",
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
		"name": "totalNftMinted",
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
	},
	{
		"inputs": [],
		"name": "validateWallet",
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
				"name": "mintQuantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "mintMode",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "mintTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "signature",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "validateSignature",
				"type": "bytes"
			}
		],
		"name": "verify",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
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
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "walletOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let address = "0x3B686118bF4272E132Bb5779747f51721e6E5afe";

let ABIArmoury = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
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
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
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
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "MintingQuantity",
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
		"inputs": [
			{
				"internalType": "address[]",
				"name": "receiver",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "id",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "quantity",
				"type": "uint256[]"
			}
		],
		"name": "airdrop",
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
				"name": "id",
				"type": "uint256"
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
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
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
		"inputs": [],
		"name": "callbackGasLimit",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
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
		"name": "deleteDefaultRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "exists",
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
		"name": "freeMinted",
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
		"name": "free_mint_status",
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
				"name": "account",
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
		"name": "lastRandomNumber",
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
		"name": "lastRequestId",
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
		"name": "max_ids",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
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
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "mintBatch",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "mintingAddress",
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
		"name": "numWords",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
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
		"name": "premiumPercentageLink",
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
		"name": "premiumPercentageNative",
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
		"name": "publicSaleCost",
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
		"inputs": [],
		"name": "randomResult",
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
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requestConfirmations",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
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
		"name": "resetTokenRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
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
				"internalType": "uint256",
				"name": "amount",
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
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint96",
				"name": "_feeNumerator",
				"type": "uint96"
			}
		],
		"name": "setDefaultRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_max_ids",
				"type": "uint256"
			}
		],
		"name": "setMax_ids",
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
				"name": "cost",
				"type": "uint256"
			}
		],
		"name": "setPublicSaleCost",
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
				"name": "_newTokenAddress",
				"type": "address"
			}
		],
		"name": "setTokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint96",
				"name": "_feeNumerator",
				"type": "uint96"
			}
		],
		"name": "setTokenRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newuri",
				"type": "string"
			}
		],
		"name": "setURI",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [],
		"name": "toggle_free_mint_status",
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
		"name": "tokenAddress",
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
				"name": "id",
				"type": "uint256"
			}
		],
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "uri",
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
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];

let addressArmoury = "0x94e843871398a138a243974aA069bd08DD40f5E2";
//let address = "0xE7268C3BC66b4dA84925D16110aE81391F26061d";

const maxSupply = 555;

const contractLink = () => {
	window.open("https://opensea.io/collection/robbotic-rabbit-armoury-2");
}

const Home = () => {


	const { open } = useWeb3Modal()
	const { chain } = useNetwork()
	const { switchNetwork } = useSwitchNetwork()

	const { address: walletAddress } = useAccount({
		async onConnect() {
			handleConnect()
		}
	})

	//const transport = webSocket(websocketUrl);

	const transport = webSocket('wss://pulsechain-testnet-rpc.publicnode.com')
	const web3_mm = new Web3_mm(Web3_mm.givenProvider || 'https://pulsechain-testnet-rpc.publicnode.com');
	const web3_1155 = new Web3_1155(Web3_1155.givenProvider || 'https://polygon-mainnet.infura.io/v3/9aad89c8e515457ab8b7805f5da593ea');

	const publicClient = createPublicClient({
		chain: pulsechainV4, polygon,
		transport,
	})

	const [_totalSupply, settotalSupply] = useState(0);
	const [statusError, setstatusError] = useState("");
	const [showErrorDiv, setshowErrorDiv] = useState("");
	const [statusLoading, setstatusLoading] = useState("");
	const [success, setsuccess] = useState("");

	const [nftMintingAmount, setnftMintingAmount] = useState(1)
	const [_publicMintMsg, set_publicMintMsg] = useState("Mint Here")
	const [_cost, set_publicSaleCost] = useState("")
	const [_max_per_wallet, set_max_per_wallet] = useState(1)
	const [_owner, set_owner] = useState("")
	const [myNFTWallet, setmyNFTWallet] = useState(0)
	const [_public_mint_status, set_public_mint_status] = useState("")
	const [_MAX_SUPPLY, set_MAX_SUPPLY] = useState("")
	const [_connected, setConnected] = useState(false)
	const { disconnect } = useDisconnect();
	const [_tokenArray, setTokenArray] = useState([]);
	const [_weaponDiv, setWeaponDiv] = useState(false);
	const [specialPower, setSpecialPower] = useState("");
	const [_drone, setDrone] = useState("");
	const [weaponsAndGear, setWeaponsAndGear] = useState("");
	const [error, setError] = useState(null);
	const [_mintingWeapon, setMintingWeapon] = useState();
	const [_mintingSpecial, setMintingSpecial] = useState();
	const [_mintingDrones, setMintingDrones] = useState();
	const [_storedTokenId, setStoredTokenId] = useState();
	const [_selectedTokenId, setSelectedTokenId] = useState();
	const [_mintingWeaponLength, setMintingWeaponLength] = useState(0);
	const [_mintingSpecialLength, setMintingSpecialLength] = useState(0);
	const [_mintingDronesLength, setMintingDronesLength] = useState(0);
	const [_loadingImgs, setLoadingImgs] = useState(0);
	const [_loadingImgsBtn, setLoadingImgsBtn] = useState(0);

	const [_loadingImgs2, setLoadingImgs2] = useState(0);
	const [_tokenArray_1155, setTokenArray_1155] = useState([]);
	const [_choiceIndex, setChoiceIndex] = useState();
	const [_chooseIndexer, setChooseIndexer] = useState();
	const [isClicked, setIsClicked] = useState(false);
	const [selectedToken, setSelectedToken] = useState(null);

	const [_successMsg, setSuccessMsg] = useState(0);
	const [_errorMsg, setErrorMsg] = useState(0);
	const [_successMsg_remove, setSuccessMsg_remove] = useState(0);
	const [_errorMsg_remove, setErrorMsg_remove] = useState(0);
	const [_msg_loading, setMsg_loading] = useState(0);
	const [_response, setResponse] = useState(0);
	const [_responseUpdated, setResponseUpdated] = useState(0);
	const [_showElements, setShowElements] = useState(0);

	const { signMessageAsync } = useSignMessage();

	const [imageUrls, setImageUrls] = useState({});

	const weaponArray = [
		"CarroTech",
		"PiranhaPlant Blaster",
		"CrimsonCollar Cape",
		"CrashCable Cluster",
		"HazeBlaze Hammer",
		"Poseidon's Poker",
		"Western Wrangler's Rifle",
		"TimeTail Thrusters",
		"CarrotKendo Katana",
		"ForceHop Pouch",
		"Golden Guardian Throne",
		"Tactical Turret",
		"Mutant Spine Spikes",
		"GothamGuardian Cape",
		"HareBot Helper",
		"Medusa's Pointed Pelerine",
		"SpiderSlicer Claws",
		"Stew Zapper Pack",
		"Golden Pika Tail",
		"Jason's Terror Tools",
		"RoboRabbit Cape",
		"StellarSpike Spine",
		"BrainBoost Tubing",
		"SandStorm Sword",
		"Flaming Phoenix Wings",
		"BowlCape Drape",
		"Toxic Inferno Cannons",
		"WaterWrangler Whirl Power Box",
		"Luminous Carrot Cascade Power Box",
		"Lightning Lash Power Box",
		"BlazeBarrage Power Box",
		"Terra Ascension Aura Power Box",
		"Quantum Leap",
		"Fortune Falls Flurry Power Box",
		"Diamond EarlyBird Scyche Special Weapon",
		"MaxMint Mallet Special Weapon",
		"Golden VIP AK47 Special Weapon",
		"Minter's Guardian Sword Special Weapon",
		"Villain FoxFire Blade Special Weapon",
		"SkyHopper Drone",
		"SpectraFly Drone",
		"GoldenGlider Drone"
	];

	const setWeaponDivOpen = (tkId) => {
		fetch(`https://robotic-rabbit-metadata-live-replica04.s3.us-east-1.amazonaws.com/${tkId}.json?t=${Date.now()}`,
			{ cache: "no-store" } // Ensures fresh fetch
		)

			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				const specialPowerTrait = data.attributes.find(
					(attr) => attr.trait_type === "Special Power"
				);

				const weaponsAndGearTrait = data.attributes.find(
					(attr) => attr.trait_type === "Weapons and Gear"
				);

				const droneTrait = data.attributes.find(
					(attr) => attr.trait_type === "Drone"
				);

				setSpecialPower(specialPowerTrait ? specialPowerTrait.value : "Not found");
				setWeaponsAndGear(weaponsAndGearTrait ? weaponsAndGearTrait.value : "Not found");
				setDrone(droneTrait ? droneTrait.value : "Not found");

				// Check if the "Weapons and Gear" trait contains multiple values and split them
				const weaponValues = weaponsAndGearTrait ? weaponsAndGearTrait.value.split(',') : [];

				// Find matching indices for all weapon values
				const matchingIndices = weaponValues
					.map((weaponValue) => {
						// Trim extra spaces and check for matching indices
						return weaponArray
							.map((weapon, index) => weapon.includes(weaponValue.trim()) ? index : -1)
							.filter(index => index !== -1); // Filter out -1 (no match)
					})
					.flat(); // Flatten the result to get a single array of indices


				// Check if the "Weapons and Gear" trait contains multiple values and split them
				const specialPowerValues = specialPowerTrait ? specialPowerTrait.value.split(',') : [];

				// Find matching indices for all weapon values
				const matchingIndices_special = specialPowerValues
					.map((specialValue) => {
						// Trim extra spaces and check for matching indices
						return weaponArray
							.map((weapon, index) => weapon.includes(specialValue.trim()) ? index : -1)
							.filter(index => index !== -1); // Filter out -1 (no match)
					})
					.flat(); // Flatten the result to get a single array of indices

				// Check if the "Weapons and Gear" trait contains multiple values and split them
				const droneValues = droneTrait ? droneTrait.value.split(',') : [];
				//const droneValues = droneTrait?.value ? [droneTrait.value] : [];



				// Find matching indices for all weapon values
				const matchingIndices_drone = droneValues
					.map((droneValue) => {
						// Trim extra spaces and check for matching indices
						return weaponArray
							.map((weapon, index) => weapon.includes(droneValue.trim()) ? index : -1)
							.filter(index => index !== -1); // Filter out -1 (no match)
					})
					.flat(); // Flatten the result to get a single array of indices



				console.log("Matching weapon indices:", matchingIndices); // Log all matching indices
				console.log("Matching special indices:", matchingIndices_special); // Log all matching indices
				console.log("Matching drone indices:", matchingIndices_drone); // Log all matching indices

				setMintingWeapon(matchingIndices);
				setMintingWeaponLength(matchingIndices.length);

				setMintingSpecial(matchingIndices_special);
				setMintingSpecialLength(matchingIndices_special.length);

				setMintingDrones(matchingIndices_drone);
				setMintingDronesLength(matchingIndices_drone.length);

			})
			.catch((err) => setError(err.message));

		setSelectedTokenId(tkId);
		setWeaponDiv(true); // Open the div only if it's not already open

	};

	const weaponDivClose = () => {
		setWeaponDiv(false);
	}

	const closeBtn = () => {
		window.location.reload(true);
	}

	const showElements = () => {
		setShowElements(1);
		fetch1155NFTs(3);
	}

	const closeBtn2 = () => {
		setErrorMsg(0);
		setErrorMsg_remove(0);
	}

	const contract = {
		address: address,
		abi: ABI
	}

	const contractArmoury = {
		address: addressArmoury,
		abi: ABIArmoury
	}

	/*useEffect(() => {
		const fetchImages = async () => {
			const urls = {};
			for (const tokenId of _tokenArray) {
				try {
					const response = await fetch(
						`https://robotic-rabbit-metadata-live-replica04.s3.us-east-1.amazonaws.com/${tokenId}.json`						
					);
					if (!response.ok) {
						throw new Error(`Error fetching metadata for token ${tokenId}`);
					}
					const data = await response.json();
					urls[tokenId] = data.image; // Store image URL from metadata
					console.log('URLS : ' + JSON.stringify(urls));
				} catch (error) {
					console.error(`Failed to load image for token ${tokenId}`, error);
					urls[tokenId] = "fallback-image-url.png"; // Set a default image on error
				}
			}
			setImageUrls(urls);
		};

		fetchImages();
	}, [_tokenArray]);*/

	/*useEffect(() => {
		const fetchImages = async () => {
			const urls = {};
			for (const tokenId of _tokenArray) {
				try {
					const response = await fetch(
						`https://robotic-rabbit-metadata-live-replica04.s3.us-east-1.amazonaws.com/${tokenId}.json?t=${Date.now()}`,
						{ cache: "no-store" } // Ensures fresh fetch
					);
					if (!response.ok) {
						throw new Error(`Error fetching metadata for token ${tokenId}`);
					}
					const data = await response.json();
					urls[tokenId] = data.image; // Store image URL from metadata
					console.log('URLS : ' + JSON.stringify(urls));
				} catch (error) {
					console.error(`Failed to load image for token ${tokenId}`, error);
					urls[tokenId] = "fallback-image-url.png"; // Set a default image on error
				}
			}
			setImageUrls(urls);
		};

		fetchImages();
	}, [_tokenArray]);*/


	useEffect(() => {
		const fetchImages = async () => {
			const urls = {};
			await Promise.all(
				_tokenArray.map(async (tokenId) => {
					try {
						const response = await fetch(
							`https://robotic-rabbit-metadata-live-replica04.s3.us-east-1.amazonaws.com/${tokenId}.json?t=${Date.now()}`,
							{ cache: "no-store" }
						);
						if (!response.ok) {
							throw new Error(`Error fetching metadata for token ${tokenId}`);
						}
						const data = await response.json();
						urls[tokenId] = `${data.image}?t=${Date.now()}`;
					} catch (error) {
						console.error(`Failed to load image for token ${tokenId}`, error);
						urls[tokenId] = "fallback-image-url.png";
					}
				})
			);
			setImageUrls(urls);
		};

		fetchImages();
	}, [_tokenArray]);



	async function removeTrait_Drn() {

		console.log("1")

		//await switchChainToPoly();

		console.log("2")

		setConnected(true);

		setMsg_loading(1);

		console.log("_mintingSpecial_mint: " + _mintingSpecial);
		console.log("selectedTokenId_server: " + _selectedTokenId);
		console.log("_mintingSpecial_mint_toString: " + _mintingSpecial.toString());

		try {
			const response = await axios.post('http://localhost:3001/api/removeDrone', {
				selectedTokenId_server: Number(_selectedTokenId),
				mintingSpecial_server: _mintingDrones,
				selectededNetwork: 137,
				userAddress: walletAddress,
				RECEIVED_DRONE_VALUE: _mintingDrones
			}
				, {
					headers: {
						'Content-Type': 'application/json',
					},
				});

			//console.log(response.data);
			//console.log(response.data);
			if (response.data = "CS_SPOkay") {
				setMsg_loading(0);
				setSuccessMsg_remove(1);
				await new Promise(resolve => setTimeout(resolve, 2000));
				window.location.reload(true);
				setErrorMsg_remove(0);
				console.log("notification_sp: " + response.data);
				setResponseUpdated(1);

			} else {
				//alert("Burning error");
				setMsg_loading(0);
				setErrorMsg_remove(1);
				setSuccessMsg_remove(0);
				console.log("notification_sp: " + response.data);
				setResponseUpdated(1);
			}

		} catch (err) {
			console.log(err);
			//console.log("notification_sp: " + err.response.data);
			setMsg_loading(0);
			setErrorMsg_remove(1);
			setSuccessMsg_remove(0);
		}

	}

	async function removeTrait_SP() {

		console.log("1")

		//await switchChainToPoly();

		console.log("2")

		setConnected(true);

		setMsg_loading(1);

		console.log("_mintingSpecial_mint: " + _mintingSpecial);
		console.log("_mintingSpecial_mint_toString: " + _mintingSpecial.toString());

		try {
			const response = await axios.post('http://localhost:3001/api/changeSyndicateMetadata_SP', {
				selectedTokenId_server: Number(_selectedTokenId),
				mintingSpecial_server: _mintingSpecial,
				selectededNetwork: 137,
				userAddress: walletAddress
			}
				, {
					headers: {
						'Content-Type': 'application/json',
					},
				});

			//console.log(response.data);
			//console.log(response.data);
			if (response.data = "CS_SPOkay") {
				setMsg_loading(0);
				setSuccessMsg_remove(1);
				await new Promise(resolve => setTimeout(resolve, 2000));
				window.location.reload(true);
				setErrorMsg_remove(0);
				console.log("notification_sp: " + response.data);
				setResponseUpdated(1);

			} else {
				//alert("Burning error");
				setMsg_loading(0);
				setErrorMsg_remove(1);
				setSuccessMsg_remove(0);
				console.log("notification_sp: " + response.data);
				setResponseUpdated(1);
			}

		} catch (err) {
			console.log(err);
			//console.log("notification_sp: " + err.response.data);
			setMsg_loading(0);
			setErrorMsg_remove(1);
			setSuccessMsg_remove(0);
		}

	}

	async function removeTrait_WG() {

		console.log("1")

		//await switchChainToPoly();

		console.log("2")

		setConnected(true);

		setMsg_loading(1);

		console.log("_mintingWeapon_mint: " + _mintingWeapon);
		console.log("_mintingWeapon_mint_toString: " + _mintingWeapon.toString());

		try {
			const response = await axios.post('http://localhost:3001/api/changeSyndicateMetadata_WG', {
				selectedTokenId_server: Number(_selectedTokenId),
				mintingWeapon_server: _mintingWeapon,
				selectededNetwork: 137,
				userAddress: walletAddress
			}
				, {
					headers: {
						'Content-Type': 'application/json',
					},
				});

			//console.log(response.data);
			if (response.data == "CS_WGOkay") {
				setMsg_loading(0);

				setSuccessMsg_remove(1);
				setErrorMsg_remove(0);
				await new Promise(resolve => setTimeout(resolve, 2000));
				window.location.reload(true);

			} else {
				//alert("Burning error");
				setMsg_loading(0);
				setErrorMsg_remove(1);
				setSuccessMsg_remove(0);
			}

			if (response.data == "networkError") {
				setErrorMsg_remove(1);

				setSuccessMsg_remove(0);
				setMsg_loading(0);
			}

		} catch (err) {
			console.log(err);
		}

	}

	async function handleConnectPoly_Drn() {
		setWeaponDiv(false);
		if (chain?.id !== 137) {
			switchNetwork?.(137);
		}

		if (!walletAddress) {
			alert("Please connect your wallet.");
			return;
		}

		try {
			//const message = `Sign this message to verify your wallet: ${walletAddress}`;
			//const signature = await signMessageAsync({ message });	

			setMsg_loading(1);
			await fetch1155NFTs(2);

			console.log("polygon");

			// Send to backend
			/*	const response = await axios.post("http://localhost:3001/api/burn_SP", {
					message: message,
					signature: signature,
					selectedTokenId_server: Number(_selectedTokenId),
					burningSpecial_server: _mintingWeapon,
					selectededNetwork: 137
	
				}, {
					headers: {
						'Content-Type': 'application/json',
					},
	
				});
	
	
				if (response.data.success) {
					setConnected(true);
					alert("Signature verified!");
				} else {
					alert("Signature verification failed!");
				}*/

			//console.log(response.data);


		} catch (error) {
			console.error("Error signing message:", error);
		}


	}


	async function handleConnectPoly_SP() {
		setWeaponDiv(false);
		if (chain?.id !== 137) {
			switchNetwork?.(137);
		}

		if (!walletAddress) {
			alert("Please connect your wallet.");
			return;
		}

		try {
			//const message = `Sign this message to verify your wallet: ${walletAddress}`;
			//const signature = await signMessageAsync({ message });	

			setMsg_loading(1);
			await fetch1155NFTs(0);

			console.log("polygon");

			// Send to backend
			/*	const response = await axios.post("http://localhost:3001/api/burn_SP", {
					message: message,
					signature: signature,
					selectedTokenId_server: Number(_selectedTokenId),
					burningSpecial_server: _mintingWeapon,
					selectededNetwork: 137
	
				}, {
					headers: {
						'Content-Type': 'application/json',
					},
	
				});
	
	
				if (response.data.success) {
					setConnected(true);
					alert("Signature verified!");
				} else {
					alert("Signature verification failed!");
				}*/

			//console.log(response.data);


		} catch (error) {
			console.error("Error signing message:", error);
		}


	}

	async function handleConnectPoly_WP() {
		setWeaponDiv(false);
		if (chain?.id !== 137) {
			switchNetwork?.(137);
		}

		if (!walletAddress) {
			alert("Please connect your wallet.");
			return;
		}

		try {
			//const message = `Sign this message to verify your wallet: ${walletAddress}`;
			//const signature = await signMessageAsync({ message });

			setMsg_loading(1);
			await fetch1155NFTs(1);


			console.log("polygon");

			// Send to backend
			/*	const response = await axios.post("http://localhost:3001/api/burn_SP", {
					message: message,
					signature: signature,
					selectedTokenId_server: Number(_selectedTokenId),
					burningSpecial_server: _mintingWeapon,
					selectededNetwork: 137
	
				}, {
					headers: {
						'Content-Type': 'application/json',
					},
	
				});
	
	
				if (response.data.success) {
					setConnected(true);
					alert("Signature verified!");
				} else {
					alert("Signature verification failed!");
				}*/


		} catch (error) {
			console.error("Error signing message:", error);
		}


	}

	async function choosePower_SP(tkId) {
		if (chain?.id !== 137) {
			switchNetwork?.(137);
		}

		if (!walletAddress) {
			alert("Please connect your wallet.");
			return;
		}

		try {

			setMsg_loading(1);

			//const message = `Sign this message to verify your wallet: ${walletAddress}`;
			//const signature = await signMessageAsync({ message });

			console.log("polygon");
			// Send to backend
			const response = await axios.post("http://localhost:3001/api/burn_SP", {
				//message: message,
				//signature: signature,
				selectedTokenId_server: Number(_selectedTokenId),
				burningSpecial_server: Number(tkId),
				selectedNetwork: '137',
				userAddress_server: walletAddress

			}, {
				headers: {
					'Content-Type': 'application/json',
				},

			});


			if (response.data == "SPOkay") {
				setConnected(true);
				//alert("Burning successful!");
				setSuccessMsg(1);
				setErrorMsg(0);
				setMsg_loading(0);
			} else {
				//alert("Burning error");
				setErrorMsg(1);
				setSuccessMsg(0);
				setMsg_loading(0);
			}

			if (response.data == "networkError") {
				setErrorMsg_remove(1);
				setSuccessMsg_remove(0);
				setMsg_loading(0);
			}

		} catch (error) {
			console.error("Error signing message:", error);
		}


	}

	async function choosePower_Drn(tkId) {
		if (chain?.id !== 137) {
			switchNetwork?.(137);
		}

		if (!walletAddress) {
			alert("Please connect your wallet.");
			return;
		}

		try {

			setMsg_loading(1);

			//const message = `Sign this message to verify your wallet: ${walletAddress}`;
			//const signature = await signMessageAsync({ message });

			console.log("polygon");

			console.log("_drn_selectedTokenId_server :" + Number(_selectedTokenId));
			console.log("_drn_mintingSpecial_server :" + Number(tkId));
			console.log("_drn_selectedNetwork :" + '137');
			console.log("_drn_userAddress_server :" + walletAddress);
			console.log("_drn_RECEIVED_DRONE_VALUE :" + Number(tkId));

			// Send to backend
			const response = await axios.post("http://localhost:3001/api/addDrone", {
				//message: message,
				//signature: signature,
				selectedTokenId_server: Number(_selectedTokenId),
				mintingSpecial_server: Number(tkId),
				selectedNetwork: '137',
				userAddress_server: walletAddress,
				RECEIVED_DRONE_VALUE: Number(tkId)
			}, {
				headers: {
					'Content-Type': 'application/json',
				},

			});


			if (response.data == "CS_SPOkay") {
				setConnected(true);
				//alert("Burning successful!");
				setSuccessMsg(1);
				setErrorMsg(0);
				setMsg_loading(0);
			} else {
				//alert("Burning error");
				setErrorMsg(1);
				setSuccessMsg(0);
				setMsg_loading(0);
			}

			if (response.data == "networkError") {
				setErrorMsg_remove(1);
				setErrorMsg(0);
				setSuccessMsg_remove(0);
				setMsg_loading(0);
			}

		} catch (error) {
			console.error("Error signing message:", error);
		}


	}

	async function choosePower_WP(tkId) {
		if (chain?.id !== 137) {
			switchNetwork?.(137);
		}

		if (!walletAddress) {
			alert("Please connect your wallet.");
			return;
		}

		try {
			//const message = `Sign this message to verify your wallet: ${walletAddress}`;
			//const signature = await signMessageAsync({ message });

			setMsg_loading(1);

			console.log("polygon");
			// Send to backend
			const response = await axios.post("http://localhost:3001/api/burn_WP", {
				//message: message,
				//signature: signature,
				selectedTokenId_server: Number(_selectedTokenId),
				burningWeapon_server: Number(tkId),
				selectedNetwork: '137',
				userAddress_server: walletAddress

			}, {
				headers: {
					'Content-Type': 'application/json',
				},

			});


			if (response.data == "WPOkay") {
				setConnected(true);
				//alert("Burning successful!");
				setSuccessMsg(1);
				setErrorMsg(0);
				setMsg_loading(0);

			} else {
				//alert("Burning error");
				setErrorMsg(1);
				setSuccessMsg(0);
				setMsg_loading(0);
			}

			if (response.data == "networkError") {
				setErrorMsg_remove(1);
				setSuccessMsg_remove(0);
				setMsg_loading(0);
			}

		} catch (error) {
			console.error("Error signing message:", error);
		}


	}
	/*async function fetch1155NFTs(choiceIndex) {
		try {
			const contract_1155 = new web3_1155.eth.Contract(ABIArmoury, addressArmoury);
			let tokenIdArray_1155 = [];

			for (let x = 0; x < 41; x++) {
				const balance1155 = await contract_1155.methods.balanceOf(walletAddress, x).call();

				if (parseInt(balance1155) > 0) {

					if (choiceIndex == 0) {
						tokenIdArray_1155.push({ tokenId: x, balance: balance1155 });
					} if (choiceIndex == 1) {
						tokenIdArray_1155.push({ tokenId: x, balance: balance1155 });
					}
					console.log(`Token ID_1155 fetched: ${x} - Balance: ${balance1155}`);
				}
			}

			// Update the state with filtered results
			setTokenArray_1155(tokenIdArray_1155);
			console.log("Filtered tokenIdArray_1155:", tokenIdArray_1155);

		} catch (error) {
			console.error("Error fetching 1155 tokens:", error);
			throw error;
		}
	}*/

	async function fetch1155NFTs(choiceIndex) {
		try {
			const contract_1155 = new web3_1155.eth.Contract(ABIArmoury, addressArmoury);
			let tokenIdArray_1155 = [];
			const specialPowers = [27, 31, 32, 28, 29, 31, 30]; // Define special weapons
			const droneList = [39, 40, 41]; // Define special weapons

			setLoadingImgs2(1);

			for (let x = 0; x <= 41; x++) {
				const balance1155 = await contract_1155.methods.balanceOf(walletAddress, x).call();

				if (parseInt(balance1155) > 0) {
					if (choiceIndex === 3) {
						tokenIdArray_1155.push({ tokenId: x, balance: balance1155 });
					} else {
						if (choiceIndex === 0 && specialPowers.includes(x)) {
							// Push only special weapons
							tokenIdArray_1155.push({ tokenId: x, balance: balance1155 });
						}
						else if (choiceIndex === 1 && !specialPowers.includes(x) && !droneList.includes(x)) {
							// Push only normal weapons (excluding special ones)
							tokenIdArray_1155.push({ tokenId: x, balance: balance1155 });
						}
						else if (choiceIndex === 2 && droneList.includes(x)) {
							// Push only drones (excluding special ones)
							tokenIdArray_1155.push({ tokenId: x, balance: balance1155 });
						}

					}

					console.log(`Token ID_1155 fetched: ${x} - Balance: ${balance1155}`);
				}
			}

			setLoadingImgs2(0);
			// Update the state with filtered results
			setTokenArray_1155(tokenIdArray_1155);
			setChoiceIndex(choiceIndex);
			console.log("Filtered tokenIdArray_1155:", tokenIdArray_1155);

			setMsg_loading(0);
			//await new Promise(resolve => setTimeout(resolve, 2000));

		} catch (error) {
			console.error("Error fetching 1155 tokens:", error);
			setMsg_loading(0);
			throw error;
		}
	}


	async function handleConnect() {
		if (chain.id !== 943) {
			switchNetwork(943)
		}

		/*if (localStorage.getItem('plsBtnClicked') !== 'plsBtn' && localStorage.getItem('plsConnected') !== 'pls') {
			if (chain.id !== 943) {
				switchNetwork(943);
			}
	
			console.log("I'm in if");
		} else {
			console.log("I'm in else");
		}*/

		//var data = await getBalance();
		//setmyNFTWallet(Number(data.data));
		//console.log("myNFTWallet :" + data.data);
		setConnected(true);

		/*if (sessionStorage.getItem('plsConnected') !== 'pls') {
			sessionStorage.setItem('tokenId', tokenId);
		}*/
	}

	/*	const { refetch: getTotalSupply } = useContractRead({
			...contract,
			functionName: 'totalSupply',
		})
		
		const { refetch: getBalance } = useContractRead({
			...contract,
			functionName: 'balanceOf',
			args: [walletAddress ? walletAddress : '0x']
		})*/

	const { refetch: getBalanceOf } = useContractRead({
		...contract,
		functionName: 'balanceOf',
		args: [walletAddress]

	})


	useEffect(() => {

		const contract_721 = new web3_mm.eth.Contract(ABI, address);

		if (statusError) {
			const timer = setTimeout(() => {
				setstatusError(false);  // Assuming you have a setter to change the state
			}, 4000); // 4 minutes in milliseconds

			// Cleanup the timeout when the component unmounts or the statusError changes
			return () => clearTimeout(timer);
		}

		if (showErrorDiv) {
			const timer = setTimeout(() => {
				setshowErrorDiv(false);  // Assuming you have a setter to change the state
			}, 4000); // 4 minutes in milliseconds

			// Cleanup the timeout when the component unmounts or the statusError changes
			return () => clearTimeout(timer);
		}

		async function fetchData2() {
			try {
				/*const data1 = await getBalanceOf();
				setmyNFTWallet(Number(data1.data));
				console.log("myNFTWallet :", data1.data);*/

				setLoadingImgs(1);
				setLoadingImgsBtn(1);

				const data1 = await contract_721.methods.balanceOf(walletAddress).call()
				setmyNFTWallet(Number(data1));
				console.log("myNFTWallet :", data1);

				let tokenIdArray = [];

				for (let x = 0; x < Number(data1); x++) {
					try {
						// Call the tokenOfOwnerByIndex function
						const tokenId = await contract_721.methods.tokenOfOwnerByIndex(walletAddress, x).call();
						tokenIdArray.push(tokenId);
						console.log("Token ID fetched:", tokenId);
					} catch (error) {
						console.error('Error fetching token:', error);
						throw error;
					}
				}

				setTimeout(() => {
					setLoadingImgs(0); // Ensure state updates properly after a short delay
					setLoadingImgsBtn(0); // Ensure state updates properly after a short delay

				}, 500);
				// Update the state with the complete array after the loop finishes
				setTokenArray(tokenIdArray);
				console.log("Final tokenIdArray:", tokenIdArray);
			} catch (error) {
				console.error("Error in fetchData2:", error);
			}
		}

		if (_connected) {
			if (chain.id == 943) {
				setLoadingImgs(1);
				setLoadingImgsBtn(1);
				fetchData2();
			}

			//fetch1155NFTs(3);
		}

		// eslint-disable-next-line no-use-before-define
	}, [showErrorDiv, statusError, _connected, _responseUpdated /*getBalance, getCost, getTotalSupply, nftMintingAmount*/]);

	/*	const { data, refetch, isSuccess } = useContractReads({
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
	*/
	//........................................//

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

			setstatusLoading(true)
			setstatusError(false)

			var res = await writeAsync({
				functionName: 'mint',
				value: '1000000000000000',
				gas: 2100000,
				gasPrice: 210000000000
			})

			var result = await publicClient.waitForTransactionReceipt(res)
			if (result.status === 'success') {
				setstatusError(false)
				setsuccess(true)
				setstatusLoading(false)
				setshowErrorDiv(false);
				await new Promise(resolve => setTimeout(resolve, 5000));
				window.location.reload(true);

			} else if (result.status) {
				setsuccess(false)
				setstatusError(true)
				setstatusLoading(false)
				setshowErrorDiv(false);
			}

		} catch (e) {
			console.error("Transaction failed:", e);
			if (e.message.includes("Transaction with hash")) {

				setsuccess(true);

				await new Promise(resolve => setTimeout(resolve, 5000));
				window.location.reload(true);
			}
			if (e.message.includes("err: insufficient funds for gas")) {
				//setErrorMsg1("Insufficient funds");
				setshowErrorDiv(true); // Show the error div for insufficient funds
				setstatusError(false);
				setstatusLoading(false);

			} else if (e.message.includes("User rejected the request")) {
				//setErrorMsg1("User Rejected");
				setshowErrorDiv(false);
				setstatusError(false);
				setstatusLoading(false);
			} else {
				//setErrorMsg1("Sorry, something went wrong");
				setshowErrorDiv(false);
				setstatusError(true);
				setstatusLoading(false);
			}

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

	async function disconnectWallet() {
		setConnected(false);
		disconnect();
		//window.location.reload(true);
	}

	const handleClick = (id) => {
		setWeaponDivOpen(id); // Existing function
		setSelectedToken(selectedToken === id ? null : id); // Toggle selection
	};

	return (
		<div>

			<div className='wrapperMain'>

				<div className="Wrpperr">
					<div className="in-header">
						<div id="headerH1">Inventory</div>
						{_connected ? (
							<button class="connect" onClick={() => disconnectWallet()}>
								{walletAddress === "" ? "Connect Wallet" : shortenAddress(walletAddress)}
							</button>
						) : (
							<button class="connect" onClick={() => { open(); }}>Wallet</button>
						)}
					</div>

					<div className="set-image">

						<div className="inventory-container">
							{/* Background image */}
							<img src={inventory} alt="Inventory Background" className="inventory-image" />

							{/* Overlay NFTs */}

							{_loadingImgs > 0 ?
								<div className="nft-overlay">
									<div className='load'>Loading...</div>
								</div> :

								<div className="nft-overlay">

									{_tokenArray.map((tokenId, index) => (
										<div key={index} className="nft-card" onClick={() => handleClick(tokenId)}
											style={{
												cursor: "pointer",
												backgroundColor: selectedToken === tokenId ? "#02e25f70" : "transparent",
											}}>
											<img
												//src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnniw7Q92zB8NbAQW5whTVOGOOqVO6E7wM4A&s"} // Replace with your NFT image URL pattern
												//src={`https://robotic-rabbit-collection.s3.amazonaws.com/${tokenId}.png`} // Replace with your NFT image URL pattern
												src={imageUrls[tokenId]}
												alt={`NFT ${tokenId}`}
												className="nft-image"
											/>
											<p className="nft-text">Token ID: <br /> {tokenId.toString()}</p>
										</div>
									))}

								</div>
							}

							{/*_loadingImgsBtn > 0 ?
								<img className='refresg-overlay ' onClick={refreshWeb} src={refresh} /> : null
							*/}
						</div>

						<div className="inventory-container">
							{/* Background image */}
							<img src={inventory} alt="Inventory Background" className="inventory-image" />

							{/*_loadingImgs2 > 0 ?
								<div className="nft-overlay">
									<div className='load'>Loading...</div>
								</div> :
								<>
									{_choiceIndex < 3 ?
										<>_choiceIndex === 0 ?
											<div className="nft-overlay2">


												{_tokenArray_1155.length > 0 ? (
													<>
														<div className='choose2'>Choose a Special Power</div>
														<div className="nft-grid">
															{_tokenArray_1155.map((token) => (
																<div className="nft-card" key={token.tokenId} onClick={() => choosePower_SP(token.tokenId)}>
																	<img
																		src={`https://tomato-imperial-woodpecker-85.mypinata.cloud/ipfs/bafybeia3h7qef76fdjzpwxguittc22e5osunusphtdtoit3hq4c2i3zahu/${token.tokenId}.png`} // Replace with your NFT image URL pattern
																		alt={`NFT ${token.tokenId}`}
																		className="nft-image"
																	/>
																	<p className='nft-text'>Token ID: {token.tokenId}</p>
																	<p className='nft-text'>Balance: {token.balance.toString()}</p>
																</div>
															))}
														</div>
													</>
												) : (
													<p className='load2'>No NFTs found.</p>
												)}

											</div>:
											
											_choiceIndex === 1 ?
											<div className="nft-overlay2">

												{_tokenArray_1155.length > 0 ? (
													<>
														<div className='choose2'>Choose a Weapon</div>
														<div className="nft-grid">
															{_tokenArray_1155.map((token) => (
																<div className="nft-card" key={token.tokenId} onClick={() => choosePower_WP(token.tokenId)}>
																	<img
																		src={`https://tomato-imperial-woodpecker-85.mypinata.cloud/ipfs/bafybeia3h7qef76fdjzpwxguittc22e5osunusphtdtoit3hq4c2i3zahu/${token.tokenId}.png`} // Replace with your NFT image URL pattern
																		alt={`NFT ${token.tokenId}`}
																		className="nft-image"
																	/>
																	<p className='nft-text'>Token ID: {token.tokenId}</p>
																	<p className='nft-text'>Balance: {token.balance.toString()}</p>
																</div>
															))}
														</div>
													</>
												) : (
													<p className='load2'>No NFTs found.</p>
												)}

											</div>:

											<div className="nft-overlay2">


												{_tokenArray_1155.length > 0 ? (
													<>
														<div className='choose2'>Choose a Drone</div>
														<div className="nft-grid">
															{_tokenArray_1155.map((token) => (
																<div className="nft-card" key={token.tokenId} onClick={() => choosePower_Drn(token.tokenId)}>
																	<img
																		src={`https://tomato-imperial-woodpecker-85.mypinata.cloud/ipfs/bafybeia3h7qef76fdjzpwxguittc22e5osunusphtdtoit3hq4c2i3zahu/${token.tokenId}.png`} // Replace with your NFT image URL pattern
																		alt={`NFT ${token.tokenId}`}
																		className="nft-image"
																	/>
																	<p className='nft-text'>Token ID: {token.tokenId}</p>
																	<p className='nft-text'>Balance: {token.balance.toString()}</p>
																</div>
															))}
														</div>
													</>
												) : (
													<p className='load2'>No NFTs found.</p>
												)}

											</div>
									 </>:

										<div className="nft-overlay2">

											{_tokenArray_1155.length > 0 ? (
												<>
													<div className='choose'>All your Special Powers, Weapons and Gears</div>
													<div className="nft-grid">
														{_tokenArray_1155.map((token) => (
															<div className="nft-card" key={token.tokenId} style={{ cursor: 'default' }}>
																<img
																	src={`https://tomato-imperial-woodpecker-85.mypinata.cloud/ipfs/bafybeia3h7qef76fdjzpwxguittc22e5osunusphtdtoit3hq4c2i3zahu/${token.tokenId}.png`}
																	alt={`NFT ${token.tokenId}`}
																	className="nft-image"
																/>
																<p className='nft-text'>Token ID: {token.tokenId}</p>
																<p className='nft-text'>Balance: {token.balance.toString()}</p>
															</div>
														))}
													</div>
												</>
											) : (
												<p className='load2'>No NFTs found.</p>
											)}

										</div>
									}

								</>
							*/}

							{_connected ?
								_showElements > 0 ?
									<div></div> :
									<button className='refresg-overlay' onClick={showElements}>
										<div className='txtR'>Show all items</div>
									</button> : null}



							{_showElements > 0 ?
								<>
									{_loadingImgs2 > 0 ? (
										<div className="nft-overlay">
											<div className='load'>Loading...</div>
										</div>
									) : (
										<>
											{_choiceIndex === 0 && (
												<div className="nft-overlay2">
													{_tokenArray_1155.length > 0 ? (
														<>
															<div className='choose2'>Choose a Special Power</div>
															<div className="nft-grid">
																{_tokenArray_1155.map((token) => (
																	<div className="nft-card" key={token.tokenId} onClick={() => choosePower_SP(token.tokenId)}>
																		<img
																			src={`https://tomato-imperial-woodpecker-85.mypinata.cloud/ipfs/bafybeia3h7qef76fdjzpwxguittc22e5osunusphtdtoit3hq4c2i3zahu/${token.tokenId}.png`}
																			alt={`NFT ${token.tokenId}`}
																			className="nft-image"
																		/>
																		<p className='nft-text'>Token ID: {token.tokenId}</p>
																		<p className='nft-text'>Balance: {token.balance.toString()}</p>
																	</div>
																))}
															</div>
														</>
													) : (
														<p className='load2'>No NFTs found.</p>
													)}
												</div>
											)}

											{_choiceIndex === 1 && (
												<div className="nft-overlay2">
													{_tokenArray_1155.length > 0 ? (
														<>
															<div className='choose2'>Choose a Weapon</div>
															<div className="nft-grid">
																{_tokenArray_1155.map((token) => (
																	<div className="nft-card" key={token.tokenId} onClick={() => choosePower_WP(token.tokenId)}>
																		<img
																			src={`https://tomato-imperial-woodpecker-85.mypinata.cloud/ipfs/bafybeia3h7qef76fdjzpwxguittc22e5osunusphtdtoit3hq4c2i3zahu/${token.tokenId}.png`}
																			alt={`NFT ${token.tokenId}`}
																			className="nft-image"
																		/>
																		<p className='nft-text'>Token ID: {token.tokenId}</p>
																		<p className='nft-text'>Balance: {token.balance.toString()}</p>
																	</div>
																))}
															</div>
														</>
													) : (
														<p className='load2'>No NFTs found.</p>
													)}
												</div>
											)}

											{_choiceIndex === 2 && (
												<div className="nft-overlay2">
													{_tokenArray_1155.length > 0 ? (
														<>
															<div className='choose2'>Choose a Drone</div>
															<div className="nft-grid">
																{_tokenArray_1155.map((token) => (
																	<div className="nft-card" key={token.tokenId} onClick={() => choosePower_Drn(token.tokenId)}>
																		<img
																			src={`https://tomato-imperial-woodpecker-85.mypinata.cloud/ipfs/bafybeia3h7qef76fdjzpwxguittc22e5osunusphtdtoit3hq4c2i3zahu/${token.tokenId}.png`}
																			alt={`NFT ${token.tokenId}`}
																			className="nft-image"
																		/>
																		<p className='nft-text'>Token ID: {token.tokenId}</p>
																		<p className='nft-text'>Balance: {token.balance.toString()}</p>
																	</div>
																))}
															</div>
														</>
													) : (
														<p className='load2'>No NFTs found.</p>
													)}
												</div>
											)}

											{_choiceIndex >= 3 && (
												<div className="nft-overlay2">
													{_tokenArray_1155.length > 0 ? (
														<>
															<div className='choose'>All your Special Powers, Drones, Weapons and Gears</div>
															<div className="nft-grid">
																{_tokenArray_1155.map((token) => (
																	<div className="nft-card" key={token.tokenId} style={{ cursor: 'default' }}>
																		<img
																			src={`https://tomato-imperial-woodpecker-85.mypinata.cloud/ipfs/bafybeia3h7qef76fdjzpwxguittc22e5osunusphtdtoit3hq4c2i3zahu/${token.tokenId}.png`}
																			alt={`NFT ${token.tokenId}`}
																			className="nft-image"
																		/>
																		<p className='nft-text'>Token ID: {token.tokenId}</p>
																		<p className='nft-text'>Balance: {token.balance.toString()}</p>
																	</div>
																))}
															</div>
														</>
													) : (
														<p className='load2'>No NFTs found.</p>
													)}
												</div>
											)}
										</>
									)}
								</>
								: null}

						</div>


					</div>

					{_weaponDiv ?
						<div class="popup-containerIn">
							<div class="popupIn">
								<div class="popup-closeIn" onClick={weaponDivClose}>×</div>
								{error ? (
									<p style={{ color: "red" }}>Error: {error}</p>
								) : (
									<div className='popupInTxt'>
										<p className='removeSection'>
											<div><strong>Special Power:</strong> {specialPower}</div>
											{_mintingSpecial && _mintingSpecial.length > 0 ? (
												<img
													src={`https://tomato-imperial-woodpecker-85.mypinata.cloud/ipfs/bafybeia3h7qef76fdjzpwxguittc22e5osunusphtdtoit3hq4c2i3zahu/${_mintingSpecial[0]}.png`}
													alt="Special Power"
												/>
											) : (
												<div></div>
											)}

											{specialPower !== "None" ?
												<div><button onClick={removeTrait_SP}>Remove</button></div> :
												<div><button onClick={handleConnectPoly_SP}>Add</button></div>
											}
										</p>

										<p className='removeSection'>
											<div><strong>Weapons and Gear:</strong> {weaponsAndGear}</div>
											{_mintingWeapon && _mintingWeapon.length > 0 ? (
												<img
													src={`https://tomato-imperial-woodpecker-85.mypinata.cloud/ipfs/bafybeia3h7qef76fdjzpwxguittc22e5osunusphtdtoit3hq4c2i3zahu/${_mintingWeapon[0]}.png`}
													alt="Weapons and Gear"
												/>
											) : (
												<div></div>
											)}

											{weaponsAndGear !== "None" ?
												<div><button onClick={removeTrait_WG}>Remove</button></div> :
												<div><button onClick={handleConnectPoly_WP}>Add</button></div>
											}
										</p>

										<p className='removeSection'>
											<div><strong>Drone:</strong> {_drone}</div>
											{_mintingDrones && _mintingDrones.length > 0 ? (
												<img
													src={`https://tomato-imperial-woodpecker-85.mypinata.cloud/ipfs/bafybeia3h7qef76fdjzpwxguittc22e5osunusphtdtoit3hq4c2i3zahu/${_mintingDrones[0]}.png`}
													alt="Drone"
												/>
											) : (
												<div></div>
											)}

											{_drone !== "None" && _drone !== 'Not found' ?
												<div><button onClick={removeTrait_Drn}>Remove</button></div> :
												<div><button onClick={handleConnectPoly_Drn}>Add</button></div>
											}
										</p>
									</div>
								)}
							</div>

						</div> : null}


					{_successMsg > 0 ?
						< div class="popup-containerIn">
							<div class="popupIn">
								<div class="popup-closeIn" onClick={closeBtn}>×</div>

								<div className='popupInTxt'>
									<img id='checkImg' src={check} />
									<div className='successMsg'>Equipped Successfully!</div>
								</div>

							</div>

						</div>
						: null}

					{_errorMsg > 0 ?
						< div class="popup-containerIn">
							<div class="popupIn">
								<div class="popup-closeIn" onClick={closeBtn2}>×</div>

								<div className='popupInTxt'>
									<img id='checkImg' src={errorImg} />
									<div className='errorMsg'>Network error</div>
								</div>

							</div>

						</div> : null}

					{_errorMsg_remove > 0 ?
						< div class="popup-containerIn">
							<div class="popupIn">
								<div class="popup-closeIn" onClick={closeBtn2}>×</div>

								<div className='popupInTxt'>
									<img id='checkImg' src={errorImg} />
									<div className='errorMsg'>Network error</div>
								</div>

							</div>

						</div> : null}

					{_msg_loading > 0 ?
						< div class="popup-containerIn2">

							<div className='popupInTxt'>
								<div class="loader"></div>
								<div className='successMsg'>LOADING...</div>
							</div>


						</div> : null}


				</div>
			</div >
		</div>
	)

}
export default Home;
