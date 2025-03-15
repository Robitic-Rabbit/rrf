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
import { pulsechainV4, optimism } from 'wagmi/chains';
import inventory from './assets/inventory.png';
import Profilesidebar from './Pages/sidebar';
import user from './assets/user.png';
import imagePic from './assets/image .png';
import game from './assets/console.png';
import check from './assets/check-mark.png';
import errorImg from './assets/error.png';
import BodyBlue from './assets/upgrades/BodyBlue.png';
import EyesBlue from './assets/upgrades/EyesBlue.png';
import HeadBlue from './assets/upgrades/HeadBlue.png';
import MouthBlue from './assets/upgrades/MouthBlue.png';
import SkullBlue from './assets/upgrades/Skull-Blue.png';
import eye from './assets/eye.png';
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
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "traitIds",
				"type": "uint256[]"
			}
		],
		"name": "degradeTraits",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [],
		"name": "incrementId",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [],
		"name": "mintAdmin",
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
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "mintOwner",
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
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"internalType": "uint256",
				"name": "_idMatcher",
				"type": "uint256"
			}
		],
		"name": "set_idMatcher",
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
				"internalType": "uint256[]",
				"name": "traitIds",
				"type": "uint256[]"
			}
		],
		"name": "setUpgradedTraits",
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
				"name": "nftId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "traitId",
				"type": "uint256"
			}
		],
		"name": "upgradeTraitsByUser",
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
		"stateMutability": "payable",
		"type": "receive"
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
		"name": "getUpgradedTraits",
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
		"inputs": [],
		"name": "idMatcher",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "traitId",
				"type": "uint256"
			}
		],
		"name": "isTraitUpgraded",
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
				"name": "nftId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "traitId",
				"type": "uint256"
			}
		],
		"name": "isTraitUpgradedOfTheNftId",
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
		"inputs": [],
		"name": "path",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "upgradedTraitsArray",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "upgradedTraitsMap",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userTraitUpgrades",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let addressArmoury = "0x6a2Df40f8C54d507533DA8E0CCB48891822042c2";
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

	const web3_1155 = new Web3_1155(Web3_1155.givenProvider || 'https://holy-burned-sheet.optimism.quiknode.pro/f7e9efbb6f5a0385ae4c3a55b94bb67eca5e31bc/');
	//const web3_1155 = new Web3_1155(Web3_1155.givenProvider || 'https://polygon-mainnet.infura.io/v3/9aad89c8e515457ab8b7805f5da593ea');

	const publicClient = createPublicClient({
		chain: pulsechainV4, optimism,
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
	const [showPopup, setShowPopup] = useState(false);

	const { signMessageAsync } = useSignMessage();

	const [imageUrls, setImageUrls] = useState({});

	const [status, setStatus] = useState("");
	const [imageUrl, setImageUrl] = useState(null);
	const [_showImg, setShowImg] = useState(null);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [loadingImg, setLoadingImg] = useState(false); // Track loading state
	const [_upgradedTraitDetails, setUpgradedTraitDetails] = useState(false); // Track loading state
	const [_upgradedTraitDetails2, setUpgradedTraitDetails2] = useState(false); // Track loading state

	//const Web3 = require('web3'); 
	//const web3 = new Web3(window.ethereum); // Use MetaMask's provider

	const traitIdList = [
		{ id: 1, type: 'Weapons and Gear', name: 'CarroTech' },
		{ id: 2, type: 'Weapons and Gear', name: 'PiranhaPlant Blaster' },
		{ id: 3, type: 'Weapons and Gear', name: 'CrimsonCollar Cape' },
		{ id: 4, type: 'Weapons and Gear', name: 'CrashCable Cluster' },
		{ id: 5, type: 'Weapons and Gear', name: 'HazeBlaze Hammer' },
		{ id: 6, type: 'Weapons and Gear', name: "Poseidon's Poker" },
		{ id: 7, type: 'Weapons and Gear', name: "Western Wrangler's Rifle" },
		{ id: 8, type: 'Weapons and Gear', name: 'TimeTail Thrusters' },
		{ id: 9, type: 'Weapons and Gear', name: 'CarrotKendo Katana' },
		{ id: 10, type: 'Weapons and Gear', name: 'ForceHop Pouch' },
		{ id: 11, type: 'Weapons and Gear', name: 'Golden Guardian Throne' },
		{ id: 12, type: 'Weapons and Gear', name: 'Tactical Turret' },
		{ id: 13, type: 'Weapons and Gear', name: 'Mutant Spine Spikes' },
		{ id: 14, type: 'Weapons and Gear', name: 'GothamGuardian Cape' },
		{ id: 15, type: 'Weapons and Gear', name: 'HareBot Helper' },
		{ id: 16, type: 'Weapons and Gear', name: "Medusa's Pointed Pelerine" },
		{ id: 17, type: 'Weapons and Gear', name: 'SpiderSlicer Claws' },
		{ id: 18, type: 'Weapons and Gear', name: 'Stew Zapper Pack' },
		{ id: 19, type: 'Weapons and Gear', name: 'Golden Pika Tail' },
		{ id: 20, type: 'Weapons and Gear', name: "Jason's Terror Tools" },
		{ id: 21, type: 'Weapons and Gear', name: 'RoboRabbit Cape' },
		{ id: 22, type: 'Weapons and Gear', name: 'StellarSpike Spine' },
		{ id: 23, type: 'Weapons and Gear', name: 'BrainBoost Tubing' },
		{ id: 24, type: 'Weapons and Gear', name: 'SandStorm Sword' },
		{ id: 25, type: 'Weapons and Gear', name: 'Flaming Phoenix Wings' },
		{ id: 26, type: 'Weapons and Gear', name: 'BowlCape Drape' },
		{ id: 27, type: 'Weapons and Gear', name: 'Toxic Inferno Cannons' },
		{ id: 28, type: 'Weapons and Gear', name: 'WaterWrangler Whirl Power Box' },
		{ id: 29, type: 'Weapons and Gear', name: 'Luminous Carrot Cascade Power Box' },
		{ id: 30, type: 'Weapons and Gear', name: 'Lightning Lash Power Box' },
		{ id: 31, type: 'Weapons and Gear', name: 'BlazeBarrage Power Box' },
		{ id: 32, type: 'Weapons and Gear', name: 'Terra Ascension Aura Power Box' },
		{ id: 33, type: 'Weapons and Gear', name: 'Quantum Leap' },
		{ id: 34, type: 'Weapons and Gear', name: 'Fortune Falls Flurry Power Box' },
		{ id: 35, type: 'Weapons and Gear', name: 'Diamond EarlyBird Scyche Special Weapon' },
		{ id: 36, type: 'Weapons and Gear', name: 'MaxMint Mallet Special Weapon' },
		{ id: 37, type: 'Weapons and Gear', name: 'Golden VIP AK47 Special Weapon' },
		{ id: 38, type: 'Weapons and Gear', name: "Minter's Guardian Sword Special Weapon" },
		{ id: 39, type: 'Weapons and Gear', name: 'Villain FoxFire Blade Special Weapon' },
		{ id: 40, type: 'Weapons and Gear', name: 'SkyHopper Drone' },
		{ id: 41, type: 'Weapons and Gear', name: 'SpectraFly Drone' },
		{ id: 42, type: 'Weapons and Gear', name: 'GoldenGlider Drone' },

		{ id: 43, type: 'Head', name: 'Alien Ape Controller' },
		{ id: 44, type: 'Head', name: 'Alien Slimy Ears' },
		{ id: 45, type: 'Head', name: 'BasicBolt BunnyEars' },
		{ id: 46, type: 'Head', name: 'BendBunny Brink' },
		{ id: 47, type: 'Head', name: 'Boxed Brain' },
		{ id: 48, type: 'Head', name: "Brady's Brain Bracer" },
		{ id: 49, type: 'Head', name: 'Brilliant Blue GoggleTop' },
		{ id: 50, type: 'Head', name: 'Bronze StewBot Ears' },
		{ id: 51, type: 'Head', name: 'BronzeBolt Helm' },
		{ id: 52, type: 'Head', name: 'CaptainCam Cap' },
		{ id: 53, type: 'Head', name: 'CarrotCrest Crown' },
		{ id: 54, type: 'Head', name: 'CarrotCrown Cap' },
		{ id: 55, type: 'Head', name: 'Carroteers Keffiyeh' },
		{ id: 56, type: 'Head', name: 'CellShell Crest' },
		{ id: 57, type: 'Head', name: 'CoralKing Crown' },
		{ id: 58, type: 'Head', name: 'CyberCottontail Kabuto' },
		{ id: 59, type: 'Head', name: 'Dark TronTopper Helmet' },
		{ id: 60, type: 'Head', name: 'DroneDoc Dome' },
		{ id: 61, type: 'Head', name: 'DuoDisk Dome' },
		{ id: 62, type: 'Head', name: 'FireFull Helmet' },
		{ id: 63, type: 'Head', name: 'FocusFrame Beanie' },
		{ id: 64, type: 'Head', name: 'GeishaGear Helm' },
		{ id: 65, type: 'Head', name: 'Golden PikaPeak' },
		{ id: 66, type: 'Head', name: 'Golden Test Dummy Receptors' },
		{ id: 67, type: 'Head', name: 'GreenGoggle Grizzle' },
		{ id: 68, type: 'Head', name: 'Hooper Hears' },
		{ id: 69, type: 'Head', name: 'Ice Intellect' },
		{ id: 70, type: 'Head', name: "Jason's GreyMatter Glance" },
		{ id: 71, type: 'Head', name: 'KingRabbit Crown' },
		{ id: 72, type: 'Head', name: "Krusty's Crown" },
		{ id: 73, type: 'Head', name: 'Laser Lid' },
		{ id: 74, type: 'Head', name: 'LibertyLid Top Hat' },
		{ id: 75, type: 'Head', name: 'LicenseLuck Beanie' },
		{ id: 76, type: 'Head', name: 'MandoMecha Mantle' },
		{ id: 77, type: 'Head', name: "Medusa's Hissing Mantle" },
		{ id: 78, type: 'Head', name: 'Mega Helmet' },
		{ id: 79, type: 'Head', name: 'Mockingjay Braid' },
		{ id: 80, type: 'Head', name: 'Mutant Apex Cranium' },
		{ id: 81, type: 'Head', name: 'NightKnight Noggin' },
		{ id: 82, type: 'Head', name: "Rabbio's Helmet" },
		{ id: 83, type: 'Head', name: 'RaggaeRabbit Cap' },
		{ id: 84, type: 'Head', name: 'Rainbow Ice Helm' },
		{ id: 85, type: 'Head', name: 'Royal Ronin Kabuto' },
		{ id: 86, type: 'Head', name: 'SockHop Lucha Mask' },
		{ id: 87, type: 'Head', name: "Sorcerer's Seer Cap" },
		{ id: 88, type: 'Head', name: 'Steel Super Scalp' },
		{ id: 89, type: 'Head', name: 'TronTopper Helmet' },
		{ id: 90, type: 'Head', name: 'TurboTop Helmet' },
		{ id: 91, type: 'Head', name: 'Western Felt Hat' },
		{ id: 92, type: 'Head', name: 'White StewBot Ears' },
		{ id: 93, type: 'Head', name: 'WolfShade Mystic Helm' },

		{ id: 94, type: 'Eyes', name: 'Alien Abyss Oculars' },
		{ id: 95, type: 'Eyes', name: 'Annoyed Baller' },
		{ id: 96, type: 'Eyes', name: 'Armored Blinds' },
		{ id: 97, type: 'Eyes', name: 'Awesomo Abyss Stare' },
		{ id: 98, type: 'Eyes', name: 'BlazeSpiral Sight' },
		{ id: 99, type: 'Eyes', name: 'Blue Side Eye' },
		{ id: 100, type: 'Eyes', name: 'BronzeLooker Lenses' },
		{ id: 101, type: 'Eyes', name: 'CitrusGlow Gaze' },
		{ id: 102, type: 'Eyes', name: 'DummyDot Sight' },
		{ id: 103, type: 'Eyes', name: 'eye' },
		{ id: 104, type: 'Eyes', name: 'eyes08' },
		{ id: 105, type: 'Eyes', name: 'eyes25' },
		{ id: 106, type: 'Eyes', name: 'eyes26' },
		{ id: 107, type: 'Eyes', name: 'eyes27' },
		{ id: 108, type: 'Eyes', name: 'FuturaBend Focus' },
		{ id: 109, type: 'Eyes', name: 'GandEyes Gaze' },
		{ id: 110, type: 'Eyes', name: 'Geisha Optic Gaze' },
		{ id: 111, type: 'Eyes', name: 'Golden Pika Peekers' },
		{ id: 112, type: 'Eyes', name: 'Golden Solar Flare Visor' },
		{ id: 113, type: 'Eyes', name: 'GothamGlare Gaze' },
		{ id: 114, type: 'Eyes', name: 'Green Apathy Gaze' },
		{ id: 115, type: 'Eyes', name: 'GreenGlow Glance' },
		{ id: 116, type: 'Eyes', name: 'GridGlow Gaze' },
		{ id: 117, type: 'Eyes', name: 'Icy Eyes' },
		{ id: 118, type: 'Eyes', name: "Jason's MenacingMystery Glare" },
		{ id: 119, type: 'Eyes', name: 'Lashed Look' },
		{ id: 120, type: 'Eyes', name: 'LuchaLibre Look' },
		{ id: 121, type: 'Eyes', name: 'Mean Green' },
		{ id: 122, type: 'Eyes', name: 'MonoScope Vision' },
		{ id: 123, type: 'Eyes', name: 'Mutant Mire Gaze' },
		{ id: 124, type: 'Eyes', name: 'NeonNexus Gaze' },
		{ id: 125, type: 'Eyes', name: 'OrangeOS Oculars' },
		{ id: 126, type: 'Eyes', name: 'Pink Laser Patch Peeker' },
		{ id: 127, type: 'Eyes', name: "Poseidon's Peepers" },
		{ id: 128, type: 'Eyes', name: 'PyroPupil Peepers' },
		{ id: 129, type: 'Eyes', name: 'Rainbow Ice Readers' },
		{ id: 130, type: 'Eyes', name: 'RedRage Gaze' },
		{ id: 131, type: 'Eyes', name: 'RoseRefractor Gaze' },
		{ id: 132, type: 'Eyes', name: 'Scrutiny Stare' },
		{ id: 133, type: 'Eyes', name: 'SeaSight Sensors' },
		{ id: 134, type: 'Eyes', name: 'ShockGlare Stare' },
		{ id: 135, type: 'Eyes', name: 'Side Eye' },
		{ id: 136, type: 'Eyes', name: 'Steel Sights' },
		{ id: 137, type: 'Eyes', name: 'StewieBot Stare' },
		{ id: 138, type: 'Eyes', name: 'Super Seer' },
		{ id: 139, type: 'Eyes', name: 'TiltedToke Twinkle' },
		{ id: 140, type: 'Eyes', name: 'T-Scan Lenses' },
		{ id: 141, type: 'Eyes', name: 'UnoDangle Damaged Optic' },
		{ id: 142, type: 'Eyes', name: 'Zombie Sam Seeing' },

		{ id: 143, type: 'Special Power', name: 'BlazeBarrage' },
		{ id: 144, type: 'Special Power', name: 'Fortune Falls Flurry' },
		{ id: 145, type: 'Special Power', name: 'Lightning Lash' },
		{ id: 146, type: 'Special Power', name: 'Luminous Carrot Cascade' },
		{ id: 147, type: 'Special Power', name: 'Quantum Leap' },
		{ id: 148, type: 'Special Power', name: 'Terra Ascension Aura' },
		{ id: 149, type: 'Special Power', name: 'WaterWrangler Whirl' },

		{ id: 150, type: 'Background', name: 'Cyber Gray' },
		{ id: 151, type: 'Background', name: 'Green' },
		{ id: 152, type: 'Background', name: 'Lime Green' },
		{ id: 153, type: 'Background', name: 'Mustard' },
		{ id: 154, type: 'Background', name: 'Orange' },
		{ id: 155, type: 'Background', name: 'Pink' },
		{ id: 156, type: 'Background', name: 'Plum Purple' },
		{ id: 157, type: 'Background', name: 'Red' },
		{ id: 158, type: 'Background', name: 'Sky Blue' },
		{ id: 159, type: 'Background', name: 'Tan' },
		{ id: 160, type: 'Background', name: 'Teal' },
		{ id: 161, type: 'Background', name: 'Violet' },

		{ id: 162, type: 'Body', name: 'AirBunny Armor' },
		{ id: 163, type: 'Body', name: 'Alien Armor' },
		{ id: 164, type: 'Body', name: 'Amazonian Armor' },
		{ id: 165, type: 'Body', name: 'Argentinian Armor' },
		{ id: 166, type: 'Body', name: 'BareBionic Build' },
		{ id: 167, type: 'Body', name: 'BatBunny Body Armor' },
		{ id: 168, type: 'Body', name: 'BattlerBunny Bodysuit' },
		{ id: 169, type: 'Body', name: 'BayBattler Body' },
		{ id: 170, type: 'Body', name: 'Bedouin Bodyplate' },
		{ id: 171, type: 'Body', name: 'Bendy Body' },
		{ id: 172, type: 'Body', name: 'BeskarBunny Plate' },
		{ id: 173, type: 'Body', name: 'BlazeBunny Mech Suit' },
		{ id: 174, type: 'Body', name: 'BluTron Barrier' },
		{ id: 175, type: 'Body', name: 'Carrotanium Armor' },
		{ id: 176, type: 'Body', name: "Cell's Suit" },
		{ id: 177, type: 'Body', name: 'CoinQuest Coverall' },
		{ id: 178, type: 'Body', name: 'Cpt.Rabbit Artisan Armor' },
		{ id: 179, type: 'Body', name: 'Dark Tron' },
		{ id: 180, type: 'Body', name: 'FutureFlux Fit' },
		{ id: 181, type: 'Body', name: "Geisha's Guarding Gown" },
		{ id: 182, type: 'Body', name: 'Golden Dummy' },
		{ id: 183, type: 'Body', name: 'Golden PikaGuard' },
		{ id: 184, type: 'Body', name: 'GrayForge Armor' },
		{ id: 185, type: 'Body', name: 'GreenForge Armor' },
		{ id: 186, type: 'Body', name: 'Ice Armor' },
		{ id: 187, type: 'Body', name: 'Juggernaut Jason' },
		{ id: 188, type: 'Body', name: 'Levitate Lifter' },
		{ id: 189, type: 'Body', name: 'LuchaBot' },
		{ id: 190, type: 'Body', name: 'MagentaMach Armor' },
		{ id: 191, type: 'Body', name: 'MegaRabbit Armor' },
		{ id: 192, type: 'Body', name: 'Mutant Mech Mantle' },
		{ id: 193, type: 'Body', name: 'PeaceLeaf Protector' },
		{ id: 194, type: 'Body', name: 'Pearl StewBot Bod' },
		{ id: 195, type: 'Body', name: 'PurpLuxe Plate' },
		{ id: 196, type: 'Body', name: 'Rabbit-O Rig' },
		{ id: 197, type: 'Body', name: 'Rainbow Ice Rig' },
		{ id: 198, type: 'Body', name: 'RebelRed Archer' },
		{ id: 199, type: 'Body', name: 'RoboRabbit' },
		{ id: 200, type: 'Body', name: 'RoboRacer Rig' },
		{ id: 201, type: 'Body', name: 'RoboWizard Robe' },
		{ id: 202, type: 'Body', name: 'Royal Rabbit Robe' },
		{ id: 203, type: 'Body', name: 'Royal Samurai Armor' },
		{ id: 204, type: 'Body', name: 'RoyalSea Armor' },
		{ id: 205, type: 'Body', name: 'RubyRonin Samurai Armor' },
		{ id: 206, type: 'Body', name: 'SamCircuit Suit' },
		{ id: 207, type: 'Body', name: 'Steel CircusSuit' },
		{ id: 208, type: 'Body', name: 'SteelSentry Suit' },
		{ id: 209, type: 'Body', name: 'StewBot Shell' },
		{ id: 210, type: 'Body', name: 'StoneStare Suit' },
		{ id: 211, type: 'Body', name: 'Teal TitanPlate' },
		{ id: 212, type: 'Body', name: 'ThunderGod Guard' },
		{ id: 213, type: 'Body', name: 'VioletVessle Vestiture' },
		{ id: 214, type: 'Body', name: 'WoodenSherrif Shell' },

		{ id: 215, type: 'Skull', name: 'Blue Gray' },
		{ id: 216, type: 'Skull', name: 'Brown' },
		{ id: 217, type: 'Skull', name: 'Charcoal Gray' },
		{ id: 218, type: 'Skull', name: 'Garnet' },
		{ id: 219, type: 'Skull', name: 'Gold' },
		{ id: 220, type: 'Skull', name: 'Gray' },
		{ id: 221, type: 'Skull', name: 'Green' },
		{ id: 222, type: 'Skull', name: 'Purple' },
		{ id: 223, type: 'Skull', name: 'Red' },
		{ id: 224, type: 'Skull', name: 'Steel' },
		{ id: 225, type: 'Skull', name: 'Teal' },

		{ id: 226, type: 'Mouth', name: 'Ahhh Orate' },
		{ id: 227, type: 'Mouth', name: 'Alien Activated Aperture' },
		{ id: 228, type: 'Mouth', name: "Baller's Breath" },
		{ id: 229, type: 'Mouth', name: 'Bendy Bite' },
		{ id: 230, type: 'Mouth', name: 'Bewildered Buccal' },
		{ id: 231, type: 'Mouth', name: 'BlazeBarrier Breather' },
		{ id: 232, type: 'Mouth', name: 'BlipBloop Lips' },
		{ id: 233, type: 'Mouth', name: 'BluntBunny Bite' },
		{ id: 234, type: 'Mouth', name: 'BountyBreath Barrier' },
		{ id: 235, type: 'Mouth', name: 'ButtonBros Bite' },
		{ id: 236, type: 'Mouth', name: 'Cardboard Cutout Chatter' },
		{ id: 237, type: 'Mouth', name: 'Carrot Chomp' },
		{ id: 238, type: 'Mouth', name: 'CarrotGrenade Gnaw' },
		{ id: 239, type: 'Mouth', name: 'Circus Smirk' },
		{ id: 240, type: 'Mouth', name: 'CrimsonCloth Bandanna' },
		{ id: 241, type: 'Mouth', name: 'Dark TronTalker' },
		{ id: 242, type: 'Mouth', name: 'GadotGoddess Grin' },
		{ id: 243, type: 'Mouth', name: "Geisha's Grin" },
		{ id: 244, type: 'Mouth', name: 'Golden Grill Grin' },
		{ id: 245, type: 'Mouth', name: 'Golden Spark Grin' },
		{ id: 246, type: 'Mouth', name: 'Golden Test Dummy Chompers' },
		{ id: 247, type: 'Mouth', name: 'Gridiron Guard' },
		{ id: 248, type: 'Mouth', name: 'Icy Frostbite' },
		{ id: 249, type: 'Mouth', name: "Jason's Jaw" },
		{ id: 250, type: 'Mouth', name: 'Jolly Smile' },
		{ id: 251, type: 'Mouth', name: 'Lip Nibble' },
		{ id: 252, type: 'Mouth', name: 'Mocking Solo Smirk' },
		{ id: 253, type: 'Mouth', name: 'Mutant Muncher' },
		{ id: 254, type: 'Mouth', name: 'Nuclear Beam Blast' },
		{ id: 255, type: 'Mouth', name: 'Nuclear Orange Blast' },
		{ id: 256, type: 'Mouth', name: 'Nuclear PinkPulse Blast' },
		{ id: 257, type: 'Mouth', name: 'Olympian Orate' },
		{ id: 258, type: 'Mouth', name: 'Predator Furry Fangs' },
		{ id: 259, type: 'Mouth', name: 'Rainbow Frostbite' },
		{ id: 260, type: 'Mouth', name: 'Rainbow Rabbit Grill' },
		{ id: 261, type: 'Mouth', name: 'RedRonin Mask' },
		{ id: 262, type: 'Mouth', name: 'Royal Samurai Respire' },
		{ id: 263, type: 'Mouth', name: 'Seagod Mask' },
		{ id: 264, type: 'Mouth', name: 'Serpent Smirk' },
		{ id: 265, type: 'Mouth', name: 'SideBite Smirk' },
		{ id: 266, type: 'Mouth', name: 'SlyGuy Smirk' },
		{ id: 267, type: 'Mouth', name: 'Smirk of Steel' },
		{ id: 268, type: 'Mouth', name: 'Steadfast' },
		{ id: 269, type: 'Mouth', name: 'Steel Lock Jaw' },
		{ id: 270, type: 'Mouth', name: 'StewBot Smirk' },
		{ id: 271, type: 'Mouth', name: 'TechCarrot Mask' },
		{ id: 272, type: 'Mouth', name: 'TentaTaste Munch' },
		{ id: 273, type: 'Mouth', name: 'Terrifying Titanium Teeth' },
		{ id: 274, type: 'Mouth', name: 'Tron Teeth' },
		{ id: 275, type: 'Mouth', name: 'Tropic Tongue' },
		{ id: 276, type: 'Mouth', name: 'VisionVore Lazer' },
		{ id: 277, type: 'Mouth', name: 'Wizard Whiskers' },
		{ id: 278, type: 'Mouth', name: 'Zombie Sam Snarl' },

		{ id: 279, type: 'Mouth', name: 'GoldenGlider' },
		{ id: 280, type: 'Mouth', name: 'SkyHopper' },
		{ id: 281, type: 'Mouth', name: 'SpectraFly' },
	];

	const generateFinalImage = (imageUrls) => {
		if (imageUrls.length === 0) {
			console.error("No images provided.");
			return;
		}

		const canvas = document.createElement('canvas'); // Create a canvas dynamically
		const ctx = canvas.getContext('2d');

		const images = [];
		let loadedImagesCount = 0;

		// Load all images before drawing
		imageUrls.forEach((url, index) => {
			const img = new Image();
			img.src = url;
			img.crossOrigin = "anonymous"; // Ensures cross-origin images can be loaded properly
			img.onload = () => {
				images[index] = img;
				loadedImagesCount++;

				// When all images are loaded, draw them
				if (loadedImagesCount === imageUrls.length) {
					combineImages(images);
				}
			};
		});

		// Function to draw images in order
		function combineImages(images) {
			// Use the first image to set canvas size
			canvas.width = images[0].width;
			canvas.height = images[0].height;

			// Draw images in the correct order
			images.forEach((image) => {
				ctx.drawImage(image, 0, 0);
			});

			// Convert to PNG and display it
			const finalImageUrl = canvas.toDataURL('image/png');
			displayFinalImage(finalImageUrl);
		}

		// Function to set the final image in the popup
		function displayFinalImage(finalImageUrl) {
			const finalImageElement = document.getElementById('finalImage');
			if (finalImageElement) {
				finalImageElement.src = finalImageUrl;
			} else {
				console.error("Image element not found.");
			}
		}
	};

	const handleViewClick = () => {
		//setImageUrl(`https://robotic-rabbit-metadata-live-replica04.s3.amazonaws.com/${tokenId}.png`);
		setImageUrl(true);
	};

	const closePopup = () => {
		setImageUrl(null);
	};

	useEffect(() => {
		const eventSource = new EventSource("https://api.roboticrabbitsyndicate.io/api/events");

		eventSource.onmessage = (event) => {
			setStatus(event.data);
		};

		eventSource.onerror = (error) => {
			console.error('SSE Error:', error);
			// Optional: Reconnect logic
			eventSource.close();
			setTimeout(() => {
				// Reconnect after delay
				setStatus("Reconnecting...");
				// Consider re-initializing the EventSource here
			}, 3000);
		};

		return () => {
			eventSource.close();
		};
	}, []);

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
			const response = await axios.post('https://api.roboticrabbitsyndicate.io/api/removeDrone', {
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
				//await new Promise(resolve => setTimeout(resolve, 4000));
				//window.location.reload(true);
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
			const response = await axios.post('https://api.roboticrabbitsyndicate.io/api/changeSyndicateMetadata_SP', {
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
				//await new Promise(resolve => setTimeout(resolve, 4000));
				//window.location.reload(true);
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

			const response = await axios.post('https://api.roboticrabbitsyndicate.io/api/changeSyndicateMetadata_WG', {
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
				//await new Promise(resolve => setTimeout(resolve, 4000));
				//window.location.reload(true);

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
			/*	const response = await axios.post("https://api.roboticrabbitsyndicate.io/api/burn_SP", {
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
			/*	const response = await axios.post("https://api.roboticrabbitsyndicate.io/api/burn_SP", {
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
			/*	const response = await axios.post("https://api.roboticrabbitsyndicate.io/api/burn_SP", {
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
			const response = await axios.post("https://api.roboticrabbitsyndicate.io/api/burn_SP", {
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
			const response = await axios.post("https://api.roboticrabbitsyndicate.io/api/addDrone", {
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
			const response = await axios.post("https://api.roboticrabbitsyndicate.io/api/burn_WP", {
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
			}

			fetchData2();

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
		setShowImg(id)
	};

	const getUpgradedTraits = async () => {
		try {
			//const upgradedTraits = await contract.methods.getUpgradedTraits().call();
			const contract_1155 = new web3_1155.eth.Contract(ABIArmoury, addressArmoury);

			const upgradedTraits = await contract_1155.methods.getUpgradedTraits().call();

			console.log("Upgraded Traits:", upgradedTraits);
			return upgradedTraits.map(id => Number(id)); // Convert BigNumber to Number
		} catch (error) {
			console.error("Error fetching upgraded traits:", error);
			return [];
		}
	};


	const fetchMetadata = async (tkId) => {
		console.log("Fetching Metadata for Token ID:", tkId);
		setLoadingImg(true); // Start loading

		try {
			// Fetch NFT metadata
			const response = await fetch(`https://robotic-rabbit-metadata-live-replica04.s3.us-east-1.amazonaws.com/${tkId}.json?t=${Date.now()}`,
				{ cache: "no-store" }
			);
			if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

			const data = await response.json();

			if (data.attributes && Array.isArray(data.attributes)) {
				// Map NFT traits to their IDs
				const matchedTraits = data.attributes.map(attr => {
					const match = traitIdList.find(trait => trait.type === attr.trait_type && attr.value.includes(trait.name));
					return match ? match.id : null;
				}).filter(id => id !== null);

				console.log("Matched Traits:", matchedTraits);


				const upgradedStatuses = await Promise.all(
					matchedTraits.map(async (traitId) => {
						try {
							const contract_1155 = new web3_1155.eth.Contract(ABIArmoury, addressArmoury);
							const isUpgraded = await contract_1155.methods.isTraitUpgradedOfTheNftId(tkId, traitId).call();
							console.log("isUpgraded : " + isUpgraded);
							await new Promise(resolve => setTimeout(resolve, 500));

							return isUpgraded ? traitId : null;
						} catch (error) {
							console.error(`Error checking trait ${traitId}:`, error);
							return null;
						}
					})
				);

				const userUpgradedMatches = upgradedStatuses.filter(id => id !== null);

				const upgradedTraitsArray = userUpgradedMatches; // Store upgraded trait IDs in an array
				console.log("Array of Upgraded Trait IDs:", upgradedTraitsArray);


				// Fetch upgraded traits from blockchain
				const upgradedTraits = await getUpgradedTraits();

				console.log("1-- :" + upgradedTraits);

				const upgradedTraitsNumbers = upgradedTraits.map(id => Number(id));

				console.log("2-- :" + upgradedTraitsNumbers);


				// Find upgraded traits in this NFT
				const upgradedMatches = matchedTraits.filter(id => upgradedTraitsNumbers.includes(id));
				console.log("3-- :" + upgradedMatches);


				console.log("Upgraded Traits in this NFT:", upgradedMatches);

				// Map upgraded trait IDs to their Type & Name
				const upgradedTraitDetails = upgradedMatches.map(id => {
					const trait = traitIdList.find(trait => trait.id === id);
					return trait ? { type: trait.type, name: trait.name } : null;
				}).filter(trait => trait !== null);

				console.log("upgradedTraitDetails : " + JSON.stringify(upgradedTraitDetails));
				setUpgradedTraitDetails(upgradedTraitDetails);


				// Map upgraded trait IDs to their Type & Name
				const upgradedTraitDetails2 = userUpgradedMatches.map(id => {
					const trait = traitIdList.find(trait => trait.id === id);
					return trait ? { type: trait.type, name: trait.name } : null;
				}).filter(trait => trait !== null);

				console.log("upgradedTraitDetails2 : " + JSON.stringify(upgradedTraitDetails2));
				setUpgradedTraitDetails2(upgradedTraitDetails2);


				fetch("https://api.roboticrabbitsyndicate.io/api/createUpgradeImg", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ _upgradedTraitDetails: upgradedTraitDetails, _upgradedTraitDetails2: upgradedTraitDetails2 })
				})
					.then(response => response.json())
					.then(data => {
						if (data.image) {
							document.getElementById("generatedImage").src = data.image;
						} else {
							console.error("Failed to receive image");
						}
					})
					.catch(error => console.error("Error:", error));

				console.log("Upgraded Trait Details:", upgradedTraitDetails);

				//return upgradedImageUrls; // Return all matching image URLs
			} else {
				console.error("Invalid attributes format");
			}

			setLoadingImg(false);
			//await new Promise(resolve => setTimeout(resolve, 2000));
			setShowPopup(true);

		} catch (err) {
			console.error("Error fetching metadata:", err.message);
		}
	};


	const sendUpgradeDetails = async (traitType, selectedUpgradedTrait, tokenId) => {

		setConnected(true);

		setMsg_loading(1);

		const payload = {
			_traitType: traitType,
			_selectedUpgradedTrait: selectedUpgradedTrait,
			_tokenId: Number(tokenId),
			_userAddress: walletAddress
		};

		try {
			const response = await fetch('https://api.roboticrabbitsyndicate.io/api/upgradeExistingTrait', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			if (!response.ok) {
				throw new Error('Failed to upgrade trait');
			}

			const data = await response.json();
			console.log('Final image path:', data.finalImagePath);
			if (response.data = "CS_SPOkay") {
				setMsg_loading(0);
				setSuccessMsg_remove(1);
				//await new Promise(resolve => setTimeout(resolve, 4000));
				//window.location.reload(true);
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
			// You can add further UI handling here
		} catch (error) {
			console.error('Error upgrading trait:', error);
			setMsg_loading(0);
			setErrorMsg_remove(1);
			setSuccessMsg_remove(0);
		}
	};



	return (
		<div>
			<canvas id="canvas" style={{ display: 'none' }}></canvas> {/* Canvas for image processing */}

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

						<div className={'inventory-container'}>

							<img src={inventory} alt="Inventory Background" className="inventory-image" />

							{_loadingImgs > 0 ?
								<div className="nft-overlay">
									<div className='load'>Loading...</div>
								</div> :

								<div className="nft-overlay">

									{_tokenArray.map((tokenId, index) => (
										<div key={index} className="nft-card" onClick={() => handleClick(tokenId)}
											style={{
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

									{_tokenArray.length < 1 && _connected ?
										<p className='load2'>No NFTs found.</p> : null}

								</div>
							}

						</div>

						<div className="inventory-container">
							{/* Background image */}
							<img src={inventory} alt="Inventory Background" className="inventory-image" />


							{_connected ?
								<>
									{_tokenArray.length > 1 && _connected ?
										<>
											{!(_choiceIndex === 0 || _choiceIndex === 1 || _choiceIndex === 2 || _loadingImgs2 > 0) && (
												<button className='refresg-overlay'>
													<div className='txtR'>Select Your NFT to view the items</div>
												</button>
											)}
										</> : <button className='refresg-overlay'>
											<div className='txtR'>You need to have NFT to view the items</div>
										</button>
									}
								</> :

								<button className='refresg-overlay'>
									<div className='txtR'>Connect your wallet to view the items</div>
								</button>

							}
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
													<p className='load2'>No Weapons, Special Powers, Drones found.</p>
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

										{/*_choiceIndex >= 3 && (
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
										)*/}
									</>
								)}
							</>


						</div>


					</div>

					{imageUrl && (
						<div className="popupImg">
							<button className="popup-closeInImg" onClick={closePopup}>×</button>
							<img src={`https://robotic-rabbit-metadata-live-replica04.s3.amazonaws.com/${_showImg}.png`} alt="NFT" id="popup-img" />
						</div>
					)}

					{showPopup && (
						<div className="popupImg">
							<button className="popup-closeInImg" onClick={() => setShowPopup(false)}>×</button>

							{/* Show "Loading..." until the image is loaded */}
							{!imageLoaded && <p className='ldtxt'>Loading...</p>}

							<img
								id="generatedImage"
								alt="Generated NFT"
								onLoad={() => setImageLoaded(true)}
								style={{ display: imageLoaded ? "block" : "none" }}
							/>


							{_upgradedTraitDetails && _upgradedTraitDetails.length > 0 && (
								<div className='traitUpgradeMain'>
									{_upgradedTraitDetails
										.filter(trait =>
											!["Background", "Special Power", "Weapons", "Gear"].includes(trait.type) &&
											!_upgradedTraitDetails2.some(t2 => t2.type === trait.type) // Exclude matching trait types
										)
										.map((trait, index) => (
											<button
												key={index}
												className="traitUpgrade"
												onClick={() => sendUpgradeDetails(trait.type, trait.name, _showImg)}
											>
												{trait.type}
											</button>
										))
									}
								</div>
							)}



						</div>
					)}

					{_weaponDiv ?
						<div class="popup-containerIn">
							<div class="popupIn">
								<div class="popup-closeIn" onClick={weaponDivClose}>×</div>

								<div className="upgrades" onClick={() => fetchMetadata(_showImg)}>
									<span className="viewTxt">{loadingImg ? "Fetching..." : "Check Upgrades"}</span>
								</div>

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

								<div className='view' onClick={handleViewClick}><span className='viewTxt'>View NFT</span> <img src={eye} /></div>

							</div>

						</div> : null}

					{_successMsg > 0 ?
						< div id="dd" class="popup-containerIn">
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
						< div id="dd" class="popup-containerIn">
							<div class="popupIn">
								<div class="popup-closeIn" onClick={closeBtn2}>×</div>

								<div className='popupInTxt'>
									<img id='checkImg' src={errorImg} />
									<div className='errorMsg'>Network error</div>
								</div>

							</div>

						</div> : null}

					{_errorMsg_remove > 0 ?
						< div id="dd" class="popup-containerIn">
							<div class="popupIn">
								<div class="popup-closeIn" onClick={closeBtn2}>×</div>

								<div className='popupInTxt'>
									<img id='checkImg' src={errorImg} />
									<div className='errorMsg'>Network error</div>
								</div>

							</div>

						</div> : null}

					{_msg_loading > 0 ?
						< div id="dd" class="popup-containerIn2">

							<div className='popupInTxt'>
								<div class="loader"></div>
								{/*<div className='successMsg'>LOADING...</div>*/}
								<div className="backMsg">
									{status}
								</div>
							</div>

						</div> : null}

					{_successMsg_remove > 0 ?
						< div id="dd" class="popup-containerIn">
							< div class="popup-containerIn">
								<div class="popupIn">
									<div class="popup-closeIn" onClick={closeBtn}>×</div>

									<div className='popupInTxt'>
										<img id='checkImg' src={check} />
										<div className='successMsg'>{status}</div>
									</div>

								</div>

							</div>
						</div> : null}

				</div>
			</div >
		</div>
	)

}
export default Home;
