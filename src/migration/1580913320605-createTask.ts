import {MigrationInterface, QueryRunner} from "typeorm";

export class createTask1580913320605 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('CREATE TABLE public."task" (id integer NOT NULL DEFAULT nextval("task_id_seq"::regclass), title character varying COLLATE pg_catalog."default" NOT NULL, status character varying COLLATE pg_catalog."default" NOT NULL, result integer NOT NULL, "time" integer NOT NULL, "missionId" integer, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY (id), CONSTRAINT "FK_82ead8e99c384a0d2ec29749615" FOREIGN KEY ("missionId") REFERENCES public.mission (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION) TABLESPACE pg_default; ALTER TABLE public.task OWNER to postgres;');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP TABLE "task" ');
    }

}
