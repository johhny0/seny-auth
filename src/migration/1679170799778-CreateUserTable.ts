import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserTable1679170799778 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Auth",

        }))
        await queryRunner.query(`
        CREATE TABLE Auth (
            Id VARCHAR(40) PRIMARY KEY,
            Email VARCHAR(255) NOT NULL,
            Name VARCHAR(255) NOT NULL,
            PicturePath VARCHAR(2083) NULL,
            UserId VARCHAR(40)
        )`)

        await queryRunner.query(`INSERT INTO Auth 
        (Login, Password) 
        VALUES 
        (1, admin, )`)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE Auth`);
    }

}
