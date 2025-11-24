export interface INameReference {
  _id: string;
  name: string;
}

export interface IBaseDocument {
  isActive: boolean;
  updatedBy: INameReference;
  createdBy: INameReference;
  createdAt: Date;
  updatedAt: Date;
}
