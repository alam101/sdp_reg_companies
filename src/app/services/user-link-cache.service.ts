import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserLinkCacheService {

  private STORAGE_KEY = 'userLinksCache';

  constructor() {}

  private loadCache(): any {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
  }

  private saveCache(cache: any) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cache));
  }

  // Returns "2025-12-04"
  private getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  // Save link + today date
  saveUserLink(userId: string, link: string) {
    const cache = this.loadCache();

    cache[userId] = {
      link,
      day: this.getToday()
    };

    this.saveCache(cache);
  }

  // Validate based on calendar day ONLY
  getUserLink(userId: string): string | null {
    const cache = this.loadCache();
    const today = this.getToday();

    if (!cache[userId]) return null;

    if (cache[userId].day !== today) {
      // New day → expire the link completely
      return null;
    }

    return cache[userId].link;
  }
}
