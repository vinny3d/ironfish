/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import * as yup from 'yup'

export type RpcAccountTransaction = {
  hash: string
  fee: string
  blockHash?: string
  blockSequence?: number
  notesCount: number
  spendsCount: number
  mintsCount: number
  burnsCount: number
  expiration: number
  timestamp: number
  submittedSequence: number
}

export type RcpAccountAssetBalanceDelta = {
  assetId: string
  assetName: string
  delta: string
}

export type RpcWalletNote = {
  value: string
  assetId: string
  assetName: string
  memo: string
  sender: string
  owner: string
  noteHash: string
  transactionHash: string
  index: number | null
  nullifier: string | null
  spent: boolean
  /**
   * @deprecated Please use `owner` address instead
   */
  isOwner: boolean
  /**
   * @deprecated Please use `noteHash` instead
   */
  hash: string
}

export const RpcWalletNoteSchema: yup.ObjectSchema<RpcWalletNote> = yup
  .object({
    value: yup.string().defined(),
    assetId: yup.string().defined(),
    assetName: yup.string().defined(),
    memo: yup.string().defined(),
    sender: yup.string().defined(),
    owner: yup.string().defined(),
    noteHash: yup.string().defined(),
    transactionHash: yup.string().defined(),
    index: yup.number(),
    nullifier: yup.string(),
    spent: yup.boolean().defined(),
    isOwner: yup.boolean().defined(),
    hash: yup.string().defined(),
  })
  .defined()

export type RpcSpend = {
  nullifier: string
  commitment: string
  size: number
}

export const RpcSpendSchema: yup.ObjectSchema<RpcSpend> = yup
  .object({
    nullifier: yup.string().defined(),
    commitment: yup.string().defined(),
    size: yup.number().defined(),
  })
  .defined()
