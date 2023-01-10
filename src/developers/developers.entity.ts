import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Project } from 'src/projects/project.entity';
import { Role } from 'src/roles/role.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
@ObjectType()
export class Developer {
  @PrimaryGeneratedColumn({ type: 'int' })
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  email: string;

  @ManyToMany(() => Role)
  @JoinTable()
  @Field(() => [Role], { nullable: true })
  roles?: Role[];

  @ManyToMany(() => Project, (project) => project.developers)
  @JoinTable()
  @Field(() => [Project], { nullable: true })
  projects?: Project[];
}
