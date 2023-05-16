import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['userId', 'email'])
export class User {
  @PrimaryGeneratedColumn()
  userId: string;

  @Column()
  password: string;

  @Column()
  name: string;
  @Column()
  email: string;
}
