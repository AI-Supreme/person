/*
  Warnings:

  - You are about to drop the `persons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "persons" DROP CONSTRAINT "persons_user_id_fkey";

-- DropTable
DROP TABLE "persons";

-- CreateTable
CREATE TABLE "people" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "tel2" TEXT,
    "mae" TEXT,
    "pai" TEXT,
    "sexo" TEXT,
    "escolaridade" TEXT,
    "profissao" TEXT,
    "nascido" TEXT,
    "obito" BOOLEAN NOT NULL DEFAULT false,
    "codigo_postal" INTEGER,
    "provincia" TEXT,
    "cidade" TEXT,
    "bairro" TEXT,
    "quarteirao" TEXT,
    "casa" INTEGER,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "people.email_unique" ON "people"("email");

-- AddForeignKey
ALTER TABLE "people" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
