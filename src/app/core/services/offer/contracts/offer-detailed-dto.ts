export class OfferDetailedDto {

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public price: number | null,
        public regionID: number,
        public region: string,
        public categoryID: number,
        public category: string,
        public ownerID: string,
        public ownerName: string,
        public announcementImagesUri: string[]
    ) { }

}