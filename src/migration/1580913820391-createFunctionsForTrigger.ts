import { MigrationInterface, QueryRunner } from 'typeorm'

export class createFunctionsForTrigger1580913646674 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('CREATE FUNCTION public.delete_time_task() RETURNS trigger LANGUAGE \'plpgsql\' AS $BODY$ BEGIN UPDATE mission SET time = time - OLD.time WHERE id = OLD."missionId"; RETURN NULL; END $BODY$; ')
    await queryRunner.query('CREATE FUNCTION public.insert_time_task() RETURNS trigger LANGUAGE \'plpgsql\' AS $BODY$ BEGIN UPDATE mission SET time = time + NEW.time WHERE id = NEW."missionId";  RETURN NULL; END; $BODY$;')
    await queryRunner.query('CREATE FUNCTION public.update_time_task() RETURNS trigger LANGUAGE \'plpgsql\' AS $BODY$ BEGIN UPDATE mission SET time = time + NEW.time - OLD.time WHERE id = NEW."missionId"; RETURN NULL; END $BODY$;')
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP FUNCTION delete_time_task();')
    await queryRunner.query('DROP FUNCTION insert_time_task()')
    await queryRunner.query('DROP FUNCTION update_time_task()')
  }
}
