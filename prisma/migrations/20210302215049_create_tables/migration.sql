-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "person_api" BOOLEAN NOT NULL DEFAULT false,
    "cambio_api" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persons" (
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
CREATE UNIQUE INDEX "users.email_unique" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "persons.email_unique" ON "persons"("email");

-- AddForeignKey
ALTER TABLE "persons" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
