import { Timestamp } from 'src/helpers/timestamp';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoStatusEnum } from '../enum/todo-status.enum';

@Entity('todo')
export class TodoEntity extends Timestamp {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 30,
  })
  name: string;
  @Column({
    length: 255,
  })
  description: string;
  @Column({
    type: 'enum',
    enum: TodoStatusEnum,
    default: TodoStatusEnum.waiting,
  })
  statut: TodoStatusEnum;
}
