/*! Calendar.js v2.10.6 | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
    "dayHeaderNames": [
      "Pzt",
      "Sa",
      "Çrs",
      "Prs",
      "Cum",
      "Cmt",
      "Paz"
    ],
    "dayNames": [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
      "Pazar"
    ],
    "dayNamesAbbreviated": [
      "Pzt",
      "Sa",
      "Çrs",
      "Prs",
      "Cum",
      "Cmt",
      "Paz"
    ],
    "monthNames": [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık"
    ],
    "monthNamesAbbreviated": [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık"
    ],
    "previousMonthTooltipText": "Geçtiğimiz ay",
    "nextMonthTooltipText": "Gelecek ay",
    "previousDayTooltipText": "Önceki gün",
    "nextDayTooltipText": "Ertesi gün",
    "previousWeekTooltipText": "Önceki hafta",
    "nextWeekTooltipText": "Gelecek hafta",
    "addEventTooltipText": "Etkinlik ekle",
    "closeTooltipText": "Kapalı",
    "exportEventsTooltipText": "Olayları Dışa Aktarma",
    "todayTooltipText": "Bugün",
    "refreshTooltipText": "Yenile",
    "searchTooltipText": "Aramak",
    "expandDayTooltipText": "Günü Genişlet",
    "viewAllEventsTooltipText": "Tüm Etkinlikleri Görüntüle",
    "viewFullWeekTooltipText": "Tüm Haftayı Görüntüle",
    "fromText": "İtibaren:",
    "toText": "İle:",
    "isAllDayText": "Tüm Gün",
    "titleText": "Başlık:",
    "descriptionText": "Tanım:",
    "locationText": "Konum:",
    "addText": "Eklemek",
    "updateText": "Güncelleme",
    "cancelText": "İptal etmek",
    "removeEventText": "Kaldırmak",
    "addEventTitle": "Etkinlik ekle",
    "editEventTitle": "Etkinliği Düzenle",
    "exportStartFilename": "dışa aktarılan_events_",
    "fromTimeErrorMessage": "Lütfen geçerli bir 'Başlangıç' zamanı seçin.",
    "toTimeErrorMessage": "Lütfen geçerli bir 'Kime' saati seçin.",
    "toSmallerThanFromErrorMessage": "Lütfen 'Başlangıç' tarihinden daha büyük bir 'Bitiş' tarihi seçin.",
    "titleErrorMessage": "Lütfen 'Başlık' alanına bir değer girin (boş alan olmadan).",
    "stText": "",
    "ndText": "",
    "rdText": "",
    "thText": "",
    "yesText": "Evet",
    "noText": "HAYIR",
    "allDayText": "Tüm gün",
    "allEventsText": "Tüm Etkinlikler",
    "toTimeText": "ile",
    "confirmEventRemoveTitle": "Etkinlik Kaldırmayı Onayla",
    "confirmEventRemoveMessage": "Bu etkinliğin kaldırılması geri alınamaz. ",
    "okText": "TAMAM",
    "exportEventsTitle": "Olayları Dışa Aktarma",
    "selectColorsText": "Renkleri Seçin",
    "backgroundColorText": "Arka plan rengi:",
    "textColorText": "Metin Rengi:",
    "borderColorText": "Sınır rengi:",
    "searchEventsTitle": "Etkinlikleri Ara",
    "previousText": "Öncesi",
    "nextText": "Sonraki",
    "matchCaseText": "Maç Durumu",
    "repeatsText": "Tekrarlar:",
    "repeatDaysToExcludeText": "Hariç Tutulacak Günleri Tekrarlayın:",
    "daysToExcludeText": "Hariç Tutulacak Günler:",
    "seriesIgnoreDatesText": "Seri Tarihleri ​​Yoksay:",
    "repeatsNever": "Asla",
    "repeatsEveryDayText": "Her gün",
    "repeatsEveryWeekText": "Her hafta",
    "repeatsEvery2WeeksText": "Her 2 Haftada Bir",
    "repeatsEveryMonthText": "Her ay",
    "repeatsEveryYearText": "Her yıl",
    "repeatsCustomText": "Gelenek:",
    "repeatOptionsTitle": "Tekrarlama Seçenekleri",
    "moreText": "Daha",
    "includeText": "Katmak:",
    "minimizedTooltipText": "küçültmek",
    "restoreTooltipText": "Eski haline getirmek",
    "removeAllEventsInSeriesText": "Serideki Tüm Olayları Kaldır",
    "createdText": "Oluşturuldu:",
    "organizerNameText": "Organizatör:",
    "organizerEmailAddressText": "Organizatör E-postası:",
    "enableFullScreenTooltipText": "Tam Ekran Modunu Aç",
    "disableFullScreenTooltipText": "Tam Ekran Modunu Kapat",
    "idText": "İD:",
    "expandMonthTooltipText": "Ayı Genişlet",
    "repeatEndsText": "Tekrar Bitişleri:",
    "noEventsAvailableText": "Hiçbir etkinlik mevcut değil.",
    "viewFullWeekText": "Tüm Haftayı Görüntüle",
    "noEventsAvailableFullText": "Görüntülenecek etkinlik yok.",
    "clickText": "Tıklamak",
    "hereText": "Burada",
    "toAddANewEventText": "Yeni bir etkinlik eklemek için.",
    "weekText": "Hafta",
    "groupText": "Grup:",
    "configurationTooltipText": "Yapılandırma",
    "configurationTitleText": "Yapılandırma",
    "groupsText": "Gruplar",
    "eventNotificationTitle": "Calendar.js",
    "eventNotificationBody": "'{0}' etkinliği başladı.",
    "optionsText": "Seçenekler:",
    "startsWithText": "İle başlar",
    "endsWithText": "Şununla biter:",
    "containsText": "İçerir",
    "displayTabText": "Görüntülemek",
    "enableAutoRefreshForEventsText": "Etkinlikler için otomatik yenilemeyi etkinleştir",
    "enableBrowserNotificationsText": "Tarayıcı bildirimlerini etkinleştir",
    "enableTooltipsText": "Araç ipuçlarını etkinleştir",
    "dayText": "gün",
    "daysText": "günler",
    "hourText": "saat",
    "hoursText": "saat",
    "minuteText": "dakika",
    "minutesText": "dakika",
    "enableDragAndDropForEventText": "Sürüklemeyi etkinleştir",
    "organizerTabText": "Organizatör",
    "removeEventsTooltipText": "Etkinlikleri Kaldır",
    "confirmEventsRemoveTitle": "Etkinliklerin Kaldırılmasını Onayla",
    "confirmEventsRemoveMessage": "Tekrarlanmayan bu etkinliklerin kaldırılması geri alınamaz. ",
    "eventText": "Etkinlik",
    "optionalText": "İsteğe bağlı",
    "urlText": "URL:",
    "openUrlText": "Link aç",
    "thisWeekTooltipText": "Bu hafta",
    "dailyText": "Günlük",
    "weeklyText": "Haftalık",
    "monthlyText": "Aylık",
    "yearlyText": "Yıllık",
    "repeatsByCustomSettingsText": "Özel Ayarlara Göre",
    "lastUpdatedText": "Son güncelleme:",
    "advancedText": "Gelişmiş",
    "copyText": "Kopyala",
    "pasteText": "Yapıştırmak",
    "duplicateText": "Kopyalamak",
    "showAlertsText": "Uyarıları Göster",
    "selectDatePlaceholderText": "Tarih seç...",
    "hideDayText": "Günü Gizle",
    "notSearchText": "Değil (karşı)",
    "showHolidaysInTheDisplaysText": "Tatilleri ana ekranda ve başlık çubuklarında göster",
    "newEventDefaultTitle": "* Yeni etkinlik",
    "urlErrorMessage": "Lütfen 'URL' alanına geçerli bir URL girin (veya boş bırakın).",
    "searchTextBoxPlaceholder": "Arama başlığı, açıklama vb.",
    "currentMonthTooltipText": "İçinde bulunduğumuz ay",
    "cutText": "Kesmek",
    "showMenuTooltipText": "Menüyü göster",
    "eventTypesText": "Etkinlik Türleri",
    "lockedText": "Kilitli:",
    "typeText": "Tip:",
    "sideMenuHeaderText": "Calendar.js",
    "sideMenuDaysText": "Günler",
    "visibleDaysText": "Görünür Günler",
    "previousYearTooltipText": "Geçen yıl",
    "nextYearTooltipText": "Gelecek Yıl",
    "showOnlyWorkingDaysText": "Yalnızca Çalışma Günlerini Göster",
    "exportFilenamePlaceholderText": "İsim: (İsteğe bağlı)",
    "errorText": "Hata",
    "exportText": "İhracat",
    "configurationUpdatedText": "Yapılandırma güncellendi.",
    "eventAddedText": "{0} etkinlik eklendi.",
    "eventUpdatedText": "{0} etkinliği güncellendi.",
    "eventRemovedText": "{0} etkinlik kaldırıldı.",
    "eventsRemovedText": "{0} etkinlik kaldırıldı.",
    "eventsExportedToText": "Etkinlikler {0}'a aktarıldı.",
    "eventsPastedText": "{0} etkinlik yapıştırıldı.",
    "eventsExportedText": "Etkinlikler dışa aktarıldı.",
    "copyToClipboardOnlyText": "Yalnızca panoya kopyala",
    "workingDaysText": "İş günleri",
    "weekendDaysText": "Hafta Sonu Günleri",
    "showAsBusyText": "Meşgul Olarak Göster",
    "selectAllText": "Hepsini seç",
    "selectNoneText": "Hiçbirini Seçme",
    "importEventsTooltipText": "Etkinlikleri İçe Aktar",
    "eventsImportedText": "{0} etkinlik içe aktarıldı.",
    "viewFullYearTooltipText": "Tüm Yılı Görüntüle",
    "currentYearTooltipText": "Mevcut yıl",
    "alertOffsetText": "Uyarı Dengesi (dakika):",
    "viewFullDayTooltipText": "Tüm Günü Görüntüle",
    "confirmEventUpdateTitle": "Etkinlik Güncellemesini Onayla",
    "confirmEventUpdateMessage": "Etkinliği bu noktadan itibaren mi yoksa tüm seriyi mi güncellemek istiyorsunuz?",
    "forwardText": "İleri",
    "seriesText": "Seri",
    "viewTimelineTooltipText": "Zaman Çizelgesini Görüntüle",
    "nextPropertyTooltipText": "Sonraki Emlak",
    "noneText": "(hiçbiri)",
    "shareText": "Paylaşmak",
    "shareStartFilename": "paylaşılan_events_",
    "previousPropertyTooltipText": "Önceki Mülk",
    "jumpToDateTitle": "Tarihe Atla",
    "goText": "Gitmek"
};