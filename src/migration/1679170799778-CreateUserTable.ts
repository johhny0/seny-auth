import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class CreateUserTable1679170799778 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "User",
            columns: [
                new TableColumn({
                    name: "Id",
                    type: "VARCHAR",
                    length: "36",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "uuid"
                }),
                new TableColumn({
                    name: "Email",
                    type: "VARCHAR",
                    length: "40"
                }),
                new TableColumn({
                    name: "Name",
                    type: "VARCHAR",
                    length: "40"
                }),
            ],
        }), true);

        await queryRunner.query(`INSERT INTO User 
                (Id, Email, Name) 
            VALUES 
                ('0e9de555-1ee3-43bf-ba14-dd48e84c8aad', 'admin@seny.io', 'Admin')`);

        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE User`);
    }

}
