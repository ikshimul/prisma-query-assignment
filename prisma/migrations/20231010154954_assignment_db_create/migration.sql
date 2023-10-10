-- CreateTable
CREATE TABLE `users` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(50) NOT NULL,
    `middleName` VARCHAR(50) NULL,
    `lastName` VARCHAR(50) NULL,
    `mobile` VARCHAR(15) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `passwordHash` VARCHAR(32) NOT NULL,
    `registeredAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `lastLogin` DATETIME(3) NULL,
    `intro` TINYTEXT NULL,
    `profile` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tags` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(75) NOT NULL,
    `metaTitle` VARCHAR(100) NULL,
    `slug` VARCHAR(100) NOT NULL,
    `content` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posts` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `autherId` BIGINT UNSIGNED NULL,
    `parentId` BIGINT UNSIGNED NULL,
    `title` VARCHAR(75) NOT NULL,
    `metaTitle` VARCHAR(100) NULL,
    `slug` VARCHAR(100) NOT NULL,
    `summary` TINYTEXT NULL,
    `published` TINYINT NOT NULL DEFAULT 0,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `publishedAt` DATETIME(3) NULL,
    `content` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `postId` BIGINT UNSIGNED NOT NULL,
    `tagId` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_comments` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `postId` BIGINT UNSIGNED NOT NULL,
    `parentId` BIGINT UNSIGNED NULL,
    `title` VARCHAR(100) NOT NULL,
    `published` TINYINT NOT NULL DEFAULT 0,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `publishedAt` DATETIME(3) NULL,
    `content` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_meta` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `postId` BIGINT UNSIGNED NOT NULL,
    `key` VARCHAR(50) NOT NULL,
    `content` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `parentId` BIGINT UNSIGNED NULL,
    `title` VARCHAR(75) NOT NULL,
    `metaTitle` VARCHAR(100) NULL,
    `slug` VARCHAR(100) NOT NULL,
    `content` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `postId` BIGINT UNSIGNED NOT NULL,
    `categoryId` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
