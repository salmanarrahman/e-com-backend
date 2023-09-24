/*
  Warnings:

  - You are about to drop the column `orderBooks` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderBooks",
ADD COLUMN     "orderedBooks" JSONB[];
