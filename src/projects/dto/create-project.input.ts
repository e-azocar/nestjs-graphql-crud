import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsArray } from 'class-validator';
import { ProjectStatus } from '../types';

@InputType()
export class CreateProjectInput {
  @IsNotEmpty({
    message: 'Name is required',
  })
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @IsNotEmpty({
    message: 'Status is required',
  })
  @Field(() => ProjectStatus)
  status: ProjectStatus;

  @IsNotEmpty({
    message: 'Roles is required',
  })
  @IsArray()
  @Field(() => [Int])
  rolesId: number[];
}
