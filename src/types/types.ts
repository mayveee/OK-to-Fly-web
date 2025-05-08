// 서버로부터 받아온 json 양식
// Detecteditems[] 안에 아래와 같은 json이 품목별로 여러개 있는 형태임
export type DetectedItem = {
    name: string;
    description: string;
    rule: {
      allowed_in_cabin: boolean;
      allowed_in_checked: boolean;
    };
};