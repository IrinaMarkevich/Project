import {MigrationInterface, QueryRunner} from "typeorm";

export class createMission1580913064429 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('CREATE TABLE public."mission" ( id integer NOT NULL DEFAULT nextval("mission_id_seq"::regclass),title character varying COLLATE pg_catalog."default" NOT NULL, status character varying COLLATE pg_catalog."default" NOT NULL, result integer NOT NULL, "time" integer NOT NULL, "userId" character varying COLLATE pg_catalog."default", CONSTRAINT "PK_54f1391034bc7dd30666dee0d4c" PRIMARY KEY (id), CONSTRAINT "FK_c7f94f33b61138a419093cb856d" FOREIGN KEY ("userId") REFERENCES public."user" (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION ) TABLESPACE pg_default; ALTER TABLE public.mission OWNER to postgres;');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP TABLE "mission" ');
    }

}
