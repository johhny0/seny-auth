import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateAuth1737870010165 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Auth",
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
                    name: "Password", 
                    type: "VARCHAR", 
                    length: "40"
                }),
                new TableColumn({
                    name: "Login", 
                    type: "VARCHAR", 
                    length: "40"
                }),
                new TableColumn({
                    name: "UserId", 
                    type: "VARCHAR", 
                    length: "36"
                }),
            ],
            foreignKeys: [
                {
                    columnNames: ["UserId"],
                    referencedTableName: "User",
                    referencedColumnNames: ["Id"],
                    onDelete: "CASCADE"
                }
            ]
        }), true);

        await queryRunner.query(`INSERT INTO Auth 
                (Id, Login, Password, UserId) 
            VALUES 
                ('fafed785-0c80-4279-8d9d-427960b3c1ae', 'admin', 'admin', '0e9de555-1ee3-43bf-ba14-dd48e84c8aad')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE Auth`);
    }

}
