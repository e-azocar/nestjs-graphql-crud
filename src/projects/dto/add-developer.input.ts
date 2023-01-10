import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class AddDeveloperInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  developerId: number;
}
