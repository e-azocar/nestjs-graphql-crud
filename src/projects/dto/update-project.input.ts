import { CreateProjectInput } from './create-project.input';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProjectInput extends CreateProjectInput {
  @Field(() => Int)
  id: number;
}
