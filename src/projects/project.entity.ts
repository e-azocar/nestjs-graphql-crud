import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Developer } from 'src/developers/developers.entity';
import { ProjectStatus } from './types';
import { Role } from 'src/roles/role.entity';

@Entity()
@ObjectType()
export class Project {
  @PrimaryGeneratedColumn({ type: 'int' })
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column()
  @Field(() => ProjectStatus)
  status: ProjectStatus;

  @ManyToMany(() => Role)
  @JoinTable()
  @Field(() => [Role], { nullable: true })
  roles?: Role[];

  @ManyToMany(() => Developer, (developer) => developer.projects)
  @Field(() => [Developer], { nullable: true })
  developers?: Developer[];
}
