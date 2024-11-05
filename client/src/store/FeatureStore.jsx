import create from "zustand";
import axios from "axios";

const FeatureStore = create((set) => ({
    FeatureList: null,
    FeaturesListRequest: async () => {
        let res = await axios.get(`/api/v1/FeaturesList`);
        if (res.data['status'] === 'success') {
            set({FeatureList: res.data['data']});
        }
    }
}));

export default FeatureStore;