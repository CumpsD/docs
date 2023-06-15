[# Masa SDK
 - v3.4.1](../README.md) / [Exports](../modules.md) / SSSBTContract

# Class: SSSBTContract<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign` |

## Hierarchy

- [`SBTContract`](SBTContract.md)<`Contract`\>

  ↳ **`SSSBTContract`**

## Table of contents

### Constructors

- [constructor](SSSBTContract.md#constructor)

### Properties

- [instances](SSSBTContract.md#instances)
- [masa](SSSBTContract.md#masa)

### Methods

- [attach](SSSBTContract.md#attach)
- [checkOrGiveAllowance](SSSBTContract.md#checkorgiveallowance)
- [connect](SSSBTContract.md#connect)
- [formatPrice](SSSBTContract.md#formatprice)
- [getMintPrice](SSSBTContract.md#getmintprice)
- [getNetworkFeeInformation](SSSBTContract.md#getnetworkfeeinformation)
- [getPaymentAddress](SSSBTContract.md#getpaymentaddress)
- [verify](SSSBTContract.md#verify)
- [addSlippage](SSSBTContract.md#addslippage)
- [loadSBTContract](SSSBTContract.md#loadsbtcontract)

## Constructors

### constructor

• **new SSSBTContract**<`Contract`\>(`masa`, `instances`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign`<`Contract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `instances` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |

#### Overrides

[SBTContract](SBTContract.md).[constructor](SBTContract.md#constructor)

## Properties

### instances

• `Protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Inherited from

[SBTContract](SBTContract.md).[instances](SBTContract.md#instances)

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[SBTContract](SBTContract.md).[masa](SBTContract.md#masa)

## Methods

### attach

▸ **attach**(`sbtContract`): [`SSSBTContractWrapper`](../interfaces/SSSBTContractWrapper.md)<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sbtContract` | `Contract` |

#### Returns

[`SSSBTContractWrapper`](../interfaces/SSSBTContractWrapper.md)<`Contract`\>

#### Overrides

[SBTContract](SBTContract.md).[attach](SBTContract.md#attach)

___

### checkOrGiveAllowance

▸ `Private` **checkOrGiveAllowance**(`paymentAddress`, `paymentMethod`, `spenderAddress`, `price`): `Promise`<`undefined` \| `ContractReceipt`\>

Checks or gives allowance on ERC20 tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentAddress` | `string` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `spenderAddress` | `string` |
| `price` | `BigNumber` |

#### Returns

`Promise`<`undefined` \| `ContractReceipt`\>

#### Inherited from

[SBTContract](SBTContract.md).[checkOrGiveAllowance](SBTContract.md#checkorgiveallowance)

___

### connect

▸ **connect**(`address`, `factory?`): `Promise`<[`SBTContractWrapper`](../interfaces/SBTContractWrapper.md)<`Contract`\>\>

loads an sbt instance and connects the contract functions to it

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `MasaSBT__factory` |

#### Returns

`Promise`<[`SBTContractWrapper`](../interfaces/SBTContractWrapper.md)<`Contract`\>\>

#### Inherited from

[SBTContract](SBTContract.md).[connect](SBTContract.md#connect)

___

### formatPrice

▸ `Protected` **formatPrice**(`paymentAddress`, `price`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentAddress` | `string` |
| `price` | `BigNumber` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[SBTContract](SBTContract.md).[formatPrice](SBTContract.md#formatprice)

___

### getMintPrice

▸ `Protected` **getMintPrice**(`paymentMethod`, `contract`, `slippage?`): `Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `contract` | `MasaSBTSelfSovereign` \| `MasaSBTAuthority` \| `MasaSBT` | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

#### Inherited from

[SBTContract](SBTContract.md).[getMintPrice](SBTContract.md#getmintprice)

___

### getNetworkFeeInformation

▸ `Protected` **getNetworkFeeInformation**(): `Promise`<`undefined` \| `FeeData`\>

#### Returns

`Promise`<`undefined` \| `FeeData`\>

#### Inherited from

[SBTContract](SBTContract.md).[getNetworkFeeInformation](SBTContract.md#getnetworkfeeinformation)

___

### getPaymentAddress

▸ `Private` **getPaymentAddress**(`paymentMethod`): `string`

Gets the payment address for a given payment method

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |

#### Returns

`string`

#### Inherited from

[SBTContract](SBTContract.md).[getPaymentAddress](SBTContract.md#getpaymentaddress)

___

### verify

▸ `Protected` **verify**(`errorMessage`, `contract`, `domain`, `types`, `value`, `signature`, `authorityAddress`): `Promise`<`void`\>

verify a signature created during one of the SBT signing flows

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorMessage` | `string` |
| `contract` | `SoulLinker` \| `SoulStore` \| `MasaSBTSelfSovereign` \| `MasaSBTAuthority` \| `MasaSBT` |
| `domain` | `TypedDataDomain` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `string` \| `number` \| `BigNumber`\> |
| `signature` | `string` |
| `authorityAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[SBTContract](SBTContract.md).[verify](SBTContract.md#verify)

___

### addSlippage

▸ `Static` `Protected` **addSlippage**(`price`, `slippage`): `BigNumber`

adds a percentage to the price as slippage

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `BigNumber` |
| `slippage` | `number` |

#### Returns

`BigNumber`

#### Inherited from

[SBTContract](SBTContract.md).[addSlippage](SBTContract.md#addslippage)

___

### loadSBTContract

▸ `Static` `Protected` **loadSBTContract**<`Contract`\>(`masaConfig`, `address`, `factory`): `Promise`<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBTSelfSovereign` \| `MasaSBTAuthority` \| `MasaSBT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masaConfig` | [`MasaConfig`](../interfaces/MasaConfig.md) |
| `address` | `string` |
| `factory` | [`ContractFactory`](ContractFactory.md) |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

[SBTContract](SBTContract.md).[loadSBTContract](SBTContract.md#loadsbtcontract)