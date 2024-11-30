import { AppState } from "src/app/app.state";
import { BookmarkState } from "../reducers/bookmark.reducer";

export const selectBookmarksList = (state: AppState) => state.bookmarks
