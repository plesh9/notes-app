import axios from "axios";

const NOTES = `https://quintadb.com.ua/apps/dcPaFdMhzcM4oSWQxcP8kG/dtypes/entity/dcS8oaltrpf4o3AJnOtSoG.json?rest_api_key=dcRuVcQmnpC4knW5DQfeLB&amp;view=`

export const notesAPI = {
  getNotes() {
    return axios.get(NOTES).then(response => response.data.records);
  },
};
