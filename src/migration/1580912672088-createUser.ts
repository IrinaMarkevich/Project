import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

export class createUser1580912672088 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "gender",
                    type: "varchar",
                },
                {
                    name: "age",
                    type: "integer",
                },

            ]
        }), true);      

        await queryRunner.createTable(new Table({
            name: "mission",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "status",
                    type: "varchar",
                },
                {
                    name: "result",
                    type: "integer",
                },
                {
                    name: "time",
                    type: "integer",
                }
            ]
        }), true);

        await queryRunner.addColumn("mission", new TableColumn({
            name: "userId", 
            type: "varchar" 
        }));

        await queryRunner.createForeignKey("mission", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));  

        await queryRunner.createTable(new Table({
            name: "task",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "status",
                    type: "varchar",
                },
                {
                    name: "result",
                    type: "integer",
                },
                {
                    name: "time",
                    type: "integer",
                }
            ]
        }), true);

        await queryRunner.addColumn("task", new TableColumn({
            name: "missionId", 
            type: "integer" 
        }));

        await queryRunner.createForeignKey("task", new TableForeignKey({
            columnNames: ["missionId"],
            referencedColumnNames: ["id"],
            referencedTableName: "mission",
            onDelete: "CASCADE"
        }));


    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const tableUser = await queryRunner.getTable("user");
        const foreignKeyUser = tableUser.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
        const tableMission = await queryRunner.getTable("mission");
        const foreignKeyMission = tableMission.foreignKeys.find(fk => fk.columnNames.indexOf("missionId") !== -1);
        await queryRunner.dropForeignKey("user", foreignKeyUser);
        await queryRunner.dropForeignKey("mission", foreignKeyMission);
        await queryRunner.dropColumn("mission", "userId");
        await queryRunner.dropColumn("task", "missionId");
        await queryRunner.query('DROP TABLE "user" ');
        await queryRunner.query('DROP TABLE "mission" ');
        await queryRunner.query('DROP TABLE "task" ');
        
    }

}
