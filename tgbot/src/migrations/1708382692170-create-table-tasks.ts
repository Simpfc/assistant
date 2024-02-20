import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableTasks1708382692170 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE \`tasks\`
             (
                 \`id\`   int(11) unsigned NOT NULL AUTO_INCREMENT,
                 \`text\` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
                 PRIMARY KEY (\`id\`)
             ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE \`tasks\``,
        )
    }

}
