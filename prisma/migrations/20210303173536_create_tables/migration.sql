/*
  Warnings:

  - The `quarteirao` column on the `people` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "people" DROP COLUMN "quarteirao",
ADD COLUMN     "quarteirao" INTEGER;
