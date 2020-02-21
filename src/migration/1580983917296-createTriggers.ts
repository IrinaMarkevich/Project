import { MigrationInterface, QueryRunner } from 'typeorm'

export class createTriggers1580983917296 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('CREATE TRIGGER task_ad AFTER DELETE ON public.task FOR EACH ROW EXECUTE PROCEDURE public.delete_time_task();')
    await queryRunner.query('CREATE TRIGGER task_ai AFTER INSERT ON public.task FOR EACH ROW EXECUTE PROCEDURE public.insert_time_task(); ')
    await queryRunner.query('CREATE TRIGGER task_au AFTER UPDATE ON public.task FOR EACH ROW EXECUTE PROCEDURE public.update_time_task();')
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TRIGGER task_ad ON public.task')
    await queryRunner.query('DROP TRIGGER task_ai ON public.task')
    await queryRunner.query('DROP TRIGGER task_au ON public.task')
  }
}
