import { create } from 'zustand';
import axios from "axios";

const FeatureStore = create((set) => ({
    FeatureList: null,
    FeaturesListRequest: async () => {
        try {
            let res = await axios.get(`/api/v1/FeaturesList`);
            if (res.data['status'] === 'success') {
                set({ FeatureList: res.data['data'] });
            }
        } catch (error) {
            console.error('Error fetching feature list:', error);
        }
    },
}));

export default FeatureStore;
