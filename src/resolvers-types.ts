import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BoundsInput = {
  minLat: Scalars['Float'];
  minLng: Scalars['Float'];
  maxLat: Scalars['Float'];
  maxLng: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  withinBounds?: Maybe<Array<Maybe<Track>>>;
  keys?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryWithinBoundsArgs = {
  key?: Maybe<Scalars['String']>;
  bounds?: Maybe<BoundsInput>;
};


export type QueryKeysArgs = {
  pattern?: Maybe<Scalars['String']>;
};

export type KeyValuePair = {
  __typename?: 'KeyValuePair';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PointObject = {
  __typename?: 'PointObject';
  type: Scalars['String'];
  properties?: Maybe<Array<KeyValuePair>>;
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Position = {
  __typename?: 'Position';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  alt?: Maybe<Scalars['Float']>;
};

export type Track = {
  __typename?: 'Track';
  id?: Maybe<Scalars['String']>;
  object?: Maybe<PointObject>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BoundsInput: BoundsInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  KeyValuePair: ResolverTypeWrapper<KeyValuePair>;
  PointObject: ResolverTypeWrapper<PointObject>;
  Position: ResolverTypeWrapper<Position>;
  Track: ResolverTypeWrapper<Track>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BoundsInput: BoundsInput;
  Float: Scalars['Float'];
  Query: {};
  String: Scalars['String'];
  KeyValuePair: KeyValuePair;
  PointObject: PointObject;
  Position: Position;
  Track: Track;
  Boolean: Scalars['Boolean'];
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  withinBounds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Track']>>>, ParentType, ContextType, RequireFields<QueryWithinBoundsArgs, never>>;
  keys?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, RequireFields<QueryKeysArgs, never>>;
};

export type KeyValuePairResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyValuePair'] = ResolversParentTypes['KeyValuePair']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PointObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['PointObject'] = ResolversParentTypes['PointObject']> = {
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  properties?: Resolver<Maybe<Array<ResolversTypes['KeyValuePair']>>, ParentType, ContextType>;
  coordinates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = {
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lng?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  alt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  object?: Resolver<Maybe<ResolversTypes['PointObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  KeyValuePair?: KeyValuePairResolvers<ContextType>;
  PointObject?: PointObjectResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
