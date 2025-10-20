import conf from "../conf/conf";
import { Client, Account, ID, Storage, Databases, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.VITE_APPWRITE_URL)
            .setProject(conf.VITE_APPWRITE_PROJECT_ID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.VITE_APPWRITE_DATABASE_ID, conf.VITE_APPWRITE_COLLECTION_ID, slug, {
                title,
                content,
                featuredImage,
                status,
                userId,


            })
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRITE_COLLECTION_ID, slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                })
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug) {

        try {
            return await this.databases.deleteDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRITE_COLLECTION_ID,
                slug)
        } catch (error) {
            throw error
        }
    }

    async getpost(slug){
        try {
            return await this.databases.getDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRITE_COLLECTION_ID,
                slug)
        } catch (error) {
            throw error
        }
    }

    async getActivePost(){
        try {
            return await this.databases.listDocuments(conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRITE_COLLECTION_ID,
                [Query.equal('status','active')]
            )
            
        } catch (error) {
            throw error
        }
    }

    // file handeling

    async uploadFile(file){
        try {
           return await this.bucket.createFile(conf.VITE_APPWRITE_BUCKET_ID,
            ID.unique(),
           file)
        } catch (error) {
            throw error
        }
    }
    
    async deleteFile(fileId){
        try {
           return await this.bucket.deleteFile(conf.VITE_APPWRITE_BUCKET_ID,
           fileId)
        } catch (error) {
            throw error
        }
    }

    filePreview(fileId){
        try {
            return this.bucket.getFileView(conf.VITE_APPWRITE_BUCKET_ID,fileId)
        } catch (error) {
            throw error
        }

    }

    downloadFile(fileId){
        try {
            return this.bucket.getFileDownload(conf.VITE_APPWRITE_BUCKET_ID,fileId)
        } catch (error) {
            throw error
        }
    }


}
const service = new Service()
export default service