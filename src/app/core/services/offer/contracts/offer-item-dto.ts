export class OfferItemDto {

    constructor(
        public id: number,
        public title: string,
        public regionID: number,
        public region: string,
        public price: number | null,
        public categoryID: number,
        public category: string,
        public announcementFaceImageUri: string | null
    ) { }

}