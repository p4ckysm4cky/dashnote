import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Card = {
  __typename?: 'Card';
  /** Back of the card */
  answer: Scalars['String'];
  id: Scalars['ID'];
  /** Front of the card */
  term: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Adds card to a quiz */
  addCard?: Maybe<Quiz>;
  /** Delete card */
  deleteCard?: Maybe<Quiz>;
  /** Delete quiz */
  deleteQuiz: Array<Quiz>;
  /** Creates in new quiz with empty array */
  newQuiz: Array<Quiz>;
};


export type MutationAddCardArgs = {
  answer: Scalars['String'];
  quizId: Scalars['ID'];
  term: Scalars['String'];
};


export type MutationDeleteCardArgs = {
  cardId: Scalars['ID'];
};


export type MutationDeleteQuizArgs = {
  quizId: Scalars['ID'];
};


export type MutationNewQuizArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Returns all quiz */
  allQuiz: Array<Quiz>;
  /** Returns a specific quiz */
  quiz?: Maybe<Quiz>;
};


export type QueryQuizArgs = {
  quizId: Scalars['ID'];
};

export type Quiz = {
  __typename?: 'Quiz';
  cards: Array<Card>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Card: ResolverTypeWrapper<Card>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Quiz: ResolverTypeWrapper<Quiz>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Card: Card;
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  Quiz: Quiz;
  String: Scalars['String'];
}>;

export type CardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Card'] = ResolversParentTypes['Card']> = ResolversObject<{
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  term?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addCard?: Resolver<Maybe<ResolversTypes['Quiz']>, ParentType, ContextType, RequireFields<MutationAddCardArgs, 'answer' | 'quizId' | 'term'>>;
  deleteCard?: Resolver<Maybe<ResolversTypes['Quiz']>, ParentType, ContextType, RequireFields<MutationDeleteCardArgs, 'cardId'>>;
  deleteQuiz?: Resolver<Array<ResolversTypes['Quiz']>, ParentType, ContextType, RequireFields<MutationDeleteQuizArgs, 'quizId'>>;
  newQuiz?: Resolver<Array<ResolversTypes['Quiz']>, ParentType, ContextType, RequireFields<MutationNewQuizArgs, 'description' | 'name'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  allQuiz?: Resolver<Array<ResolversTypes['Quiz']>, ParentType, ContextType>;
  quiz?: Resolver<Maybe<ResolversTypes['Quiz']>, ParentType, ContextType, RequireFields<QueryQuizArgs, 'quizId'>>;
}>;

export type QuizResolvers<ContextType = any, ParentType extends ResolversParentTypes['Quiz'] = ResolversParentTypes['Quiz']> = ResolversObject<{
  cards?: Resolver<Array<ResolversTypes['Card']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Card?: CardResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Quiz?: QuizResolvers<ContextType>;
}>;

