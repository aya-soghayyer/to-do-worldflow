import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Index
} from "typeorm";
import { User } from "./user.js";
import { Tag } from "./Tag.js";

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;


  @ManyToOne(() => User, user => user.todos, 
    {
     eager: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE" 
    }
  )
  @Column()
  user: number;

  @Column({
    length: 50,
    nullable: false  // Required
  })
  title: string;

  @Column({
    default: 'No description'
  })
  description: string;

  // @Index("status_index")
  @Column({
    type: 'enum',
    enum: ['new', 'done'],
    default: 'new'
  })
  status: 'new' | 'done';

  @CreateDateColumn({
    type: 'timestamp',
    default: () => "CURRENT_TIMESTAMP()"
  })
  createdAt: Date;

  @ManyToMany(() => Tag, { cascade: true, eager: true })
  @JoinTable()
  tags: Tag[];

}
