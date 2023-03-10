-- CreateTable
CREATE TABLE `Raspberry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `macAddress` VARCHAR(17) NOT NULL,

    UNIQUE INDEX `Raspberry_macAddress_key`(`macAddress`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Record` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `raspberryId` INTEGER NOT NULL,
    `temperature` INTEGER NOT NULL,
    `pressure` DOUBLE NULL,
    `ipAddress` VARCHAR(45) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Record` ADD CONSTRAINT `Record_raspberryId_fkey` FOREIGN KEY (`raspberryId`) REFERENCES `Raspberry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
