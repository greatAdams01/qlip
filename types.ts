import { ObjectId } from 'npm:mongoose@^6.7';

interface DefaultAttributes {
  _doc?: any;
  _id?: string;
  deletedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

type DevicePlatform = 'ios' | 'android' | 'web';

export interface IView extends DefaultAttributes {
  author: ObjectId;
  eventId: ObjectId;
  listingId: ObjectId;
  productId: ObjectId;
  platform: DevicePlatform;
}