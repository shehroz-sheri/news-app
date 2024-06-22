import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Article {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  fullDescription: string;
  author: string;
  publishedAt: string;
  likes: number;
  shares: number;
}

interface NewsState {
  articles: Article[];
  loading: boolean;
  error: string | null;
  page: number;
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
  page: 0,
};

const apiKey = 'tJRbLzARCWUNRimfce1DBOTKOLFu9VpW'

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ query, page }: { query: string; page: number }) => {
    const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=${apiKey}`);
    return response.data.response.docs.map((doc: any) => ({
      title: doc.headline.main,
      description: doc.snippet,
      fullDescription: doc.lead_paragraph,
      url: doc.web_url,
      imageUrl: doc.multimedia.length ? `https://www.nytimes.com/${doc.multimedia[0].url}` : '',
      author: doc.byline.original,
      publishedAt: doc.pub_date,
      likes: Math.floor(Math.random() * 1000),
      shares: Math.floor(Math.random() * 1000),
    }));
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    resetArticles(state) {
      state.articles = [];
      state.page = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.loading = false;
        state.articles = state.articles.concat(action.payload);
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch news';
      });
  },
});

export const { incrementPage, resetArticles } = newsSlice.actions;
export default newsSlice.reducer;
