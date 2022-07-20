import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PaymentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MerchantsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Payments {
  readonly id: string;
  readonly merchant_id?: string | null;
  readonly vendor_name?: string | null;
  readonly secret_key?: string | null;
  readonly email?: string | null;
  readonly logo?: string | null;
  readonly api_key?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Payments, PaymentsMetaData>);
  static copyOf(source: Payments, mutator: (draft: MutableModel<Payments, PaymentsMetaData>) => MutableModel<Payments, PaymentsMetaData> | void): Payments;
}

export declare class Merchants {
  readonly id: string;
  readonly merchant_id?: string | null;
  readonly company?: string | null;
  readonly established?: string | null;
  readonly country?: string | null;
  readonly state?: string | null;
  readonly city?: string | null;
  readonly email?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Merchants, MerchantsMetaData>);
  static copyOf(source: Merchants, mutator: (draft: MutableModel<Merchants, MerchantsMetaData>) => MutableModel<Merchants, MerchantsMetaData> | void): Merchants;
}