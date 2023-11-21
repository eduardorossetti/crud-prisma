-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
