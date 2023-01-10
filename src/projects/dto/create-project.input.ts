import { InputType, Field } from '@nestjs/graphql';
import { ProjectStatus } from '../types';

@InputType()
export class CreateProjectInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ProjectStatus)
  status: ProjectStatus;

  @Field(() => [Number])
  rolesId: number[];
}
