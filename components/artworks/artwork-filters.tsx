"use client";

import { SupportedLanguage } from "@/translations/types";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { getTranslations } from "@/translations";
import { useMemo } from "react";

interface ArtworkFiltersProps {
  collections: string[];
  searchValue: string;
  collectionValue: string;
  lang: SupportedLanguage;
}

const ArtworkFilters = ({
  collections,
  searchValue,
  collectionValue,
  lang,
}: ArtworkFiltersProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const t = useMemo(() => getTranslations(lang), [lang]);

  const debouncedSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    router.push(`/${lang}/artworks?${params.toString()}`);
  }, 300);

  const handleCollectionChange = (collection: string) => {
    const params = new URLSearchParams(searchParams);
    if (collection && collection !== "all") {
      params.set("collection", collection);
    } else {
      params.delete("collection");
    }
    router.push(`/${lang}/artworks?${params.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder={t.ui.artworks.filters.search}
          defaultValue={searchValue}
          onChange={(e) => debouncedSearch(e.target.value)}
          className="pl-10 bg-input border-border/50 focus:border-ring"
          aria-label={t.ui.artworks.filters.ariaSearch}
        />
      </div>
      <div className="sm:max-w-fit">
        <Select value={collectionValue} onValueChange={handleCollectionChange}>
          <SelectTrigger className="bg-input border-border/50 focus:border-ring">
            <SelectValue placeholder={t.ui.artworks.filters.allCollections} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              {t.ui.artworks.filters.allCollections}
            </SelectItem>
            {collections.map((collection) => (
              <SelectItem key={collection} value={collection}>
                {collection}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
export default ArtworkFilters;
