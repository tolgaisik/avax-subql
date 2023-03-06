// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { Transfer, OwnerOf, TokenSaleConfigEvent } from "../types";
import {
  AvalancheBlock,
  AvalancheTransaction,
  AvalancheLog,
} from "@subql/types-avalanche";
import { TransferEvent } from "../contracts/LandToken";
import assert from "assert";

export async function handleTransfer(log: AvalancheLog): Promise<void> {
  //assert(log.args, 'No log args!');
  logger.info("#########################");
  logger.info("#########################");
  logger.info("#LOG:", log);
  logger.info("#########################");
  logger.info("#########################");

  /*
  const logRecord = new Transfer(`${log.blockHash}-${log.logIndex}`);
  logRecord.address = log.address;
  logRecord.blockHash = log.blockHash;
  logRecord.blockNumber = log.blockNumber;
  logRecord.data = log.data;
  logRecord.logIndex = log.logIndex;
  logRecord.removed = log.removed;
  logRecord.topics = log.topics;
  logRecord.transactionHash = log.transactionHash;
  logRecord.transactionIndex = log.transactionIndex;
  await logRecord.save();
  */

  if (log.args) {
    const ownerOf = new OwnerOf(log.args.tokenId.toString());
    ownerOf.owner = log.args.to;
    await ownerOf.save();
  }
}

export async function handleTokenSaleProgram(log: AvalancheLog): Promise<void> {
        logger.info("handleTokenSaleProgram");

        logger.info(log.args.price.toString());

        logger.info("tierId " + typeof log.args.tierId.toNumber());
        logger.info("name " + typeof log.args.name);
        logger.info("count " + typeof log.args.count);
        logger.info("saleEnabled " + typeof log.args.saleEnabled);
        logger.info("startDate " + typeof log.args.startDate)
        logger.info("endDate " + typeof log.args.endDate);
        logger.info("saleType " + typeof log.args.state);

        const tokenSaleConfig = new TokenSaleConfigEvent(log.transactionHash);

        tokenSaleConfig.tierId = Number(log.args.tierId);
        tokenSaleConfig.name = log.args.name.toString();
        tokenSaleConfig.count = Number(log.args.count);
        tokenSaleConfig.saleEnabled = Boolean(log.args.saleEnabled);
        tokenSaleConfig.startDate = String(log.args.startDate);
        tokenSaleConfig.endDate = String(log.args.endDate);
        tokenSaleConfig.state = log.args.state;

        console.log("tokenSaleConfig", tokenSaleConfig)

        await tokenSaleConfig.save();
        return;
}

export async function handleTokenSale(log: AvalancheLog): Promise<void> {
        logger.info("#########################");
        logger.info("#########################");
        logger.info("#LOG:", log.transactionHash);
        logger.info("#########################");
        logger.info("#########################");
}
