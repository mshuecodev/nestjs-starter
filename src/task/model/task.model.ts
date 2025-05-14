import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Int)
  priority: number;

  @Field()
  status: string;

  @Field()
  completed: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
